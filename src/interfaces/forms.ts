import { OptionalObjectSchema } from 'yup/lib/object';
import * as Yup from 'yup';

export interface FormProps {
  onSubmit(values: {}): void;
  children: React.ReactNode;
  schema: OptionalObjectSchema<Record<keyof unknown, Yup.AnySchema>>;
}
export interface ILoginForm {
  usermail: string;
  password: string;
}
