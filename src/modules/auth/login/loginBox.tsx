import { Avatar, Chip, Stack, Typography } from '@mui/material';
import { FC } from 'react';

import { ILoginBox } from '@/interfaces/loginBox';
import Form from '@/common/components/form/Form';
import { LoginShema } from '@/common/schemas';
import Input from '@/common/components/formControls/Input';
import SimpleButton from '@/common/components/buttons/simpleButton';

const LoginBox: FC<ILoginBox> = ({ title }) => {
  const onSubmit = () => {};

  return (
    <Stack spacing={5}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Chip label="Steplix" variant="outlined" />
        <Chip label="Back Office" variant="outlined" />
      </Stack>
      <Stack spacing={2}>
        <Avatar />
        <Typography
          sx={{
            color: 'primary.main',
            fontSize: '32px',
          }}
        >
          {title}
        </Typography>
      </Stack>
      <Form schema={LoginShema} onSubmit={onSubmit}>
        <Stack spacing={2}>
          <Input
            color="primary.main"
            iconName="mail"
            name="usermail"
            variant="outlined"
          />
          <Input
            passwordAdornment
            color="primary.main"
            iconName="lock"
            name="password"
            variant="outlined"
          />
          <SimpleButton
            fullWidth={true}
            text="Iniciar sesión"
            type="submit"
            variant="contained"
          />
        </Stack>
      </Form>
    </Stack>
  );
};

export default LoginBox;
