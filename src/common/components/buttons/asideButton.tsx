import { IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';

import { IconAsideButtonProp } from '@/interfaces/buttons';

import Icons from '../icons/mui-icons';

const AsideButton: FC<IconAsideButtonProp> = ({ iconName, label, color, open }) => {
  const IconComponent = Icons[iconName];

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ':hover': { color: color },
      }}
    >
      <IconButton
        sx={{
          width: '56px',
          height: '32px',
          color: color,
          borderRadius: '100px',
          ':hover': { backgroundColor: 'background.iconHover' },
        }}
      >
        <IconComponent />
      </IconButton>
      <Typography sx={{ fontSize: '10px', display: open ? 'block' : 'none' }}>
        {label}
      </Typography>
    </Stack>
  );
};

export default AsideButton;
