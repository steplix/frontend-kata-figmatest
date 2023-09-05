import React from 'react';
import { Box } from '@mui/material';

const BlockA = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={{ flexGrow: 1, backgroundColor: 'black' }}>{children}</Box>;
};

export default BlockA;
