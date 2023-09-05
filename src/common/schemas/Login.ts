import * as Yup from 'yup';

export const LoginShema = Yup.object().shape({
  usermail: Yup.string()
    .email('Ingrese un tipo de e-mail valido')
    .required('Campo requerido'),
  password: Yup.string().required('Campo requerido'),
});
