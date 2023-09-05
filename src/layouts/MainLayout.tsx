import React, { FC } from 'react';
import Stack from '@mui/joy/Stack';

import Topbar from './Topbar';
import Aside from './Aside';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        minHeight: '100vh',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        paddingBottom: '1rem !important',
        backgroundColor: '#C0C0C0',
      }}
    >
      <Topbar />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          height: '100%',
          flexGrow: 1,
          marginRight: '1rem !important',
        }}
      >
        <Aside
          avatarText={'Admin'}
          buttons={[
            { iconName: 'userFill', label: 'Usuarios' },
            { iconName: 'accounts', label: 'Cuentas' },
            { iconName: 'computer', label: 'Comunicadores' },
          ]}
          color="primary.main"
        />
        {children}
      </Stack>
    </Stack>
  );
};
