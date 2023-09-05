import { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

export interface Token {
  data: {
    access_token: string;
    refresh_token: string;
  };
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
  _retry?: boolean;
}

export interface CustomAxiosError extends AxiosError {
  config: CustomAxiosRequestConfig;
}

export interface Data {
  file: {
    blobFile: Blob;
  };
  idType: string;
  idChannel: string;
  metadata: {
    filename: string;
  };
}

export interface RequestOptions {
  data: Data;
  json: string;
  url?: string;
  method?: string;
  raw: any;
}

export interface MapAxiosKeys {
  [key: string]: string | undefined;
}

export interface GenericPromise<T> extends Promise<T> {
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
  ): GenericPromise<TResult1 | TResult2>;

  catch<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
  ): GenericPromise<T | TResult>;

  finally(onfinally?: (() => void) | undefined | null): GenericPromise<T>;
}
