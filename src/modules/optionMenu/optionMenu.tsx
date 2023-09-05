import { Box, MenuItem, MenuList, Typography } from '@mui/material';
import { FC } from 'react';

import { ImenuItem } from '@/interfaces/optionMenu';
import Icons from '@/common/components/icons/mui-icons';

const OptionMenu: FC<ImenuItem> = ({ menuItems }) => {
  return (
    <Box sx={{ width: '162px' }}>
      <MenuList>
        {menuItems.map((menuItem, index) => {
          const IconComponent = Icons[menuItem.iconName];

          return (
            <MenuItem
              key={index.toString() + 1}
              sx={{
                marginBottom: '10px',
                height: '36px',
                color: 'background.itemHover',
                ':hover': {
                  borderRadius: '0 8px 8px 0',
                  backgroundColor: 'background.itemHover',
                  color: 'primary.main',
                  boxShadow: '4px 0 0 0',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}>
                <IconComponent fontSize="inherit" />
                <Typography sx={{ fontSize: '16px', color: 'black', marginLeft: '16px' }}>
                  {menuItem.text}
                </Typography>
              </Box>
            </MenuItem>
          );
        })}
      </MenuList>
    </Box>
  );
};

export default OptionMenu;
