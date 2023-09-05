import axios, {
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import P from 'bluebird';
import _ from 'lodash';
// import Router from "next/router";
import { Methods } from '@lucassith/http-constants';

import {
  MapAxiosKeys,
  CustomAxiosRequestConfig,
  CustomAxiosError,
  RequestOptions,
  Token,
} from '@/interfaces/index';

import { getUserByToken, setUserToken } from './tokenManager';

const env = process.env.REACT_APP_ENVIRONMENT || process.env.NODE_ENV;

export const stage =
  env === 'testing' || env === 'development' ? '-test' : env === 'staging' ? '-stag' : '';
// TODO DEFINE BASE URL AND APP URL
export const baseUrl = process.env.API_URL || `https://.com`;
export const appUrl = process.env.HOST || `https://.com`;
const REFRESH_ENDPOINT = '/auth/refresh';

const axiosDefaultInstanceOptions = {
  baseURL: baseUrl,
  timeout: 10000,
};
const axiosRequestDefaultOptions = {
  crossDomain: true,
  normalize: true,
  json: true,
};

const mapAxiosKeys: MapAxiosKeys = {
  baseUrl: 'baseURL',
  uri: 'url',
  qs: 'params',
  body: 'data',
};

class Service {
  name: string;
  basePath: string;
  appUrl: string;
  options: object;
  instance: any;
  requestInterceptors: AxiosInterceptorManager<AxiosRequestConfig>;
  responseInterceptors: AxiosInterceptorManager<AxiosResponse>;

  constructor(name: string, basePath?: string, options = {}) {
    this.name = name;
    this.basePath = basePath || `/${name}`;
    this.appUrl = appUrl;
    this.options = options;
    this.instance = axios.create(_.merge({}, axiosDefaultInstanceOptions, options));
    this.requestInterceptors = this.instance.interceptors.request.use(
      (config: CustomAxiosRequestConfig) => {
        const user = getUserByToken();

        // Commented while no login page exists, to be defined in each project configuration
        // if (
        //   !user &&
        //   Router.pathname !== "/login" &&
        //   Router.pathname !== "/register" &&
        //   Router.pathname !== "/recover" &&
        //   Router.pathname !== "/change-password" &&
        //   Router.pathname !== "/auth/password/forgot"
        // ) {
        //   Router.push("/login");
        // }

        if (user) {
          config.headers['Authorization'] = this.getAuthHeader(user.token.access_token);
        }

        return config;
      },
      (error: AxiosError) => P.reject(error),
    );
    this.responseInterceptors = this.instance.interceptors.response.use(
      (response: AxiosResponse) => P.resolve(response),
      async (error: CustomAxiosError) => {
        const originalConfig = error.config;

        if (error.response) {
          if (originalConfig.url === `${baseUrl}${REFRESH_ENDPOINT}`) {
            this.logout();
            P.reject(error);
          }
          if (error.response?.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            const user = getUserByToken();
            const accessToken = user?.token?.access_token;
            const refreshToken = user?.token?.refresh_token;

            if (!accessToken || !refreshToken) {
              this.logout();

              return P.reject(error);
            }

            return this.refreshToken(accessToken, refreshToken).then(
              (newToken: Token) => {
                setUserToken(newToken.data);
                this.instance.defaults.headers.common.Authorization =
                  this.getAuthHeader(newToken);
                originalConfig.headers.Authorization = this.getAuthHeader(newToken);

                return this.instance.request(originalConfig);
              },
            );
          }
        }

        return P.reject(error);
      },
    );
  }

  clearInterceptors(req: boolean, res: boolean) {
    req && this.instance.interceptors.request.eject(this.requestInterceptors);
    res && this.instance.interceptors.response.eject(this.responseInterceptors);

    return P.resolve();
  }

  request(method: string, options: RequestOptions) {
    return P.bind(this).then(() => {
      return new P((resolve, reject) => {
        // Get logged in user
        const user = getUserByToken();

        if (user && user.data) {
          const token = user.token.access_token;

          this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
        }
        const opts = this.prepareOptions(method, options);

        if (!opts.json) {
          this.instance.defaults.headers['Content-Type'] = 'multipart/form-data';

          if (opts.data.file) {
            const files = new FormData();

            files.append('file', opts.data.file.blobFile);
            files.append('idType', opts.data.idType);
            files.append('idChannel', opts.data.idChannel);
            files.append(
              'metadata',
              JSON.stringify({
                dirname: 'test',
                filename: opts.data.metadata.filename,
                //'size': files[0].size
              }),
            );

            opts.data = files;
          }
        }

        return this.instance
          .request(opts)
          .then((res: { data: object }) => resolve(opts.raw ? res : res.data))
          .catch((error: object) => reject(error));
      });
    });
  }

  refreshToken(accessToken: string, refreshToken: string) {
    const options = {
      url: `${baseUrl}/auth/tokens/refresh`,
      method: 'POST',
      data: {
        accessToken,
        refreshToken,
      },
    };

    return this.instance.request(options);
  }

  prepareOptions(method: string, options: any) {
    if (_.isString(options)) {
      options = {
        url: options,
      };
    }
    options.method = method || 'get';
    options = _.defaultsDeep(
      {},
      _.mapKeys(options, (value, key) => mapAxiosKeys[key] || key),
      axiosRequestDefaultOptions,
    );

    return options;
  }

  getAuthHeader(token: Token, prefix = 'Bearer ') {
    return `${prefix}${token}`;
  }

  logout() {
    localStorage.removeItem('sessionUser');
  }
}

_.forEach(
  _.map(Methods, (method) => method.toLowerCase()),
  (method: any) => {
    (Service.prototype as any)[method] = function (options: RequestOptions) {
      return this.request(method, options);
    };
  },
);

export default Service;
