import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, Stack, Typography } from '@mui/material';

import Icons from '@/common/components/icons/mui-icons';
import { IDropdownButton } from '@/interfaces/dropDownButton';

const DropdownButton: React.FC<IDropdownButton> = ({ color, menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls={open ? 'dropDown-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        aria-label="more"
        id="dropDown-button"
        sx={{ color: color }}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'dropDown-button',
        }}
        anchorEl={anchorEl}
        id="dropDown-menu"
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => {
          const IconComponent = Icons[item.iconName];

          return (
            <MenuItem
              key={index.toString() + 1}
              sx={{
                height: '56px',
                ':hover': {
                  backgroundColor: 'background.itemHover',
                  color: item.color,
                  fontWeight: 500,
                },
              }}
              onClick={handleClose}
            >
              <Stack direction="row" spacing={2}>
                <Box sx={{ color: item.color }}>
                  <IconComponent />
                </Box>
                <Typography>{item.text}</Typography>
              </Stack>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default DropdownButton;
