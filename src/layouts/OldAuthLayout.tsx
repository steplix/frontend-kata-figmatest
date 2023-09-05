// Create a layout with material ui 5

import { ReactNode } from 'react';
import { Box, Grid } from '@mui/material';

import { SteplixILogo } from '@/components/icons';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item display="flex" justifyContent="center" marginX={0} marginY={8} xs={12}>
          <SteplixILogo textColor="#000" />
        </Grid>
        <Grid item display="flex" justifyContent="center" xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};
