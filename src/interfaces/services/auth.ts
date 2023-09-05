export interface VerifyEmailBody {
  email: string;
  idPlatform: number;
  isAndroidDevice: boolean;
}
export interface VerifyEmailResponse {
  id: number;
  code: number;
  message: string;
}
