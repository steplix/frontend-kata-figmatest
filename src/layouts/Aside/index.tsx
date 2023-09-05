import { Avatar, Box, IconButton, Stack } from '@mui/material';
import { FC, useState } from 'react';
import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material';

import { IAsideBar } from '@/interfaces/aside';
import AsideButton from '@/common/components/buttons/asideButton';

const Aside: FC<IAsideBar> = ({ avatarText, buttons, color }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        width: open ? '120px' : '85px',
        backgroundColor: 'background.secondary',
        position: 'relative',
      }}
    >
      <Stack
        spacing={3}
        sx={{
          padding: '44px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ fontSize: '10px', width: '48px', height: '48px', backgroundColor: color }}
        >
          {avatarText}
        </Avatar>
        {buttons.map((button, index) => (
          <AsideButton
            key={index.toString() + 1}
            color={color}
            iconName={button.iconName}
            label={button.label}
            open={open}
          />
        ))}
        <IconButton
          sx={{
            color: color,
            border: '2px solid',
            width: '18px',
            height: '18px',
            position: 'absolute',
            bottom: '44px',
          }}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <NavigateBeforeOutlined fontSize="inherit" />
          ) : (
            <NavigateNextOutlined fontSize="inherit" />
          )}
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Aside;
