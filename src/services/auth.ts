import { GenericPromise, VerifyEmailBody, VerifyEmailResponse } from '@/interfaces/index';

import Service from './base';

class Auth extends Service {
  [x: string]: any;
  constructor() {
    super('auth');
  }

  // Example of request with body and promise response type
  verifyEmail(data: VerifyEmailBody): GenericPromise<VerifyEmailResponse> {
    return this.post({
      url: `${this.basePath}/emails/verify`,
      data,
    });
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Auth();
