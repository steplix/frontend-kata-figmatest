import React from 'react';
import { Box, Stack } from '@mui/material';

interface NewAuthLayoutProps {
  components: {
    contentA: JSX.Element;
    contentB: JSX.Element;
  };
}

const NewAuthLayout: React.FC<NewAuthLayoutProps> = ({ components }) => {
  return (
    <Stack direction="row" sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <Box sx={{ backgroundColor: 'primary.main', width: '50%' }}>
        {components.contentA}
      </Box>
      <Box
        sx={{
          backgroundColor: '#C0C0C0',
          width: '50%',
          padding: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {components.contentB}
      </Box>
    </Stack>
  );
};

export default NewAuthLayout;
