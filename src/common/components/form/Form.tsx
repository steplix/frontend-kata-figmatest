import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC } from 'react';

import { FormProps } from '@/interfaces/forms';

const Form: FC<FormProps> = ({ children, onSubmit, schema }) => {
  const form = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...form}>{children}</FormProvider>
    </form>
  );
};

export default Form;
