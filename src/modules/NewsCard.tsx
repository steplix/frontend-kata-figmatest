import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const NewsCard = (): JSX.Element => {
  return (
    <Stack
      direction="row"
      sx={{
        height: '7.25rem',
        width: '21.6rem',
      }}
    >
      <Stack
        direction={'row'}
        sx={{
          backgroundColor: '#656E71',
          width: '9.625rem',
          justifyContent: 'end',
          padding: '0.5rem',
          borderStartStartRadius: '1rem',
          borderEndStartRadius: '1rem',
        }}
      >
        <Box
          sx={{
            background: 'white',
            padding: '0.4rem 0.9rem',
            width: 'fit-content',
            borderRadius: '6.25rem',
            lineHeight: '0',
            height: 'fit-content',
          }}
        >
          <CelebrationIcon sx={{ height: '1rem', width: '1rem' }} />
        </Box>
      </Stack>
      <Stack
        sx={{
          backgroundColor: '#F7F7F7',
          width: '11.98638rem',
          padding: '1rem 1.5rem',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderStartEndRadius: '1rem',
          borderEndEndRadius: '1rem',
        }}
      >
        <Typography>Título</Typography>
        <Stack direction={'row'} sx={{ gap: '8px' }}>
          <CalendarMonthIcon sx={{ height: '1rem', width: '1rem' }} />
          <Typography sx={{ fontSize: '0.6875rem' }}>Dia XX de mes</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
