import type { NextPage } from 'next';

import { Box } from '@mui/material';

import AuthLayout from '@/layouts/AuthLayout';
import LoginBox from '@/modules/auth/login/loginBox';

const Home: NextPage = () => {
  return (
    <AuthLayout
      components={{
        contentA: <></>,
        contentB: (
          <Box
            sx={{
              backgroundColor: 'backgroundColor.main',
              borderRadius: '16px',
              padding: '32px 32px 80px 32px',
              minWidth: '460px',
              minHeight: '570px',
            }}
          >
            <LoginBox title="¡Te damos la bienvenida!" />
          </Box>
        ),
      }}
    />
  );
};

export default Home;
