import { Button } from '@mui/material';
import { FC } from 'react';

import { ButtonsBaseProps } from '@/interfaces/buttons';

const SimpleButton: FC<ButtonsBaseProps> = ({
  variant,
  text,
  fullWidth,
  type,
  onClick,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      size="large"
      sx={{
        borderRadius: '50px',
        fontSize: '14px',
        textTransform: 'none',
      }}
      type={type}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SimpleButton;
