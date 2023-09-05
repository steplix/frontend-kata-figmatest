import { FC, useEffect, useState } from 'react';
import { useFormContext, useController } from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { InputProps } from '../../../interfaces/formControls';
import Icons from '../icons/mui-icons';

const Input: FC<InputProps> = ({
  name,
  type,
  label,
  placeholder,
  passwordAdornment,
  variant,
  color,
  minRows,
  iconName,
}) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({ name: name, control });
  const [show, setShow] = useState(true);
  const IconComponent = Icons[iconName];

  useEffect(() => {
    passwordAdornment && setShow(false);
    // eslint-disable-next-line
  },[])

  return (
    <FormControl fullWidth>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <TextField
        InputProps={
          passwordAdornment
            ? {
                startAdornment: (
                  <IconButton sx={{ color: color }}>
                    <IconComponent />
                  </IconButton>
                ),
                endAdornment: show ? (
                  <IconButton sx={{ color: color }} onClick={() => setShow(false)}>
                    <VisibilityOff />
                  </IconButton>
                ) : (
                  <IconButton sx={{ color: color }} onClick={() => setShow(true)}>
                    <Visibility />
                  </IconButton>
                ),
              }
            : {
                startAdornment: (
                  <IconButton sx={{ color: color }}>
                    <IconComponent />
                  </IconButton>
                ),
              }
        }
        inputRef={ref}
        minRows={minRows || 1}
        placeholder={placeholder}
        sx={{ borderRadius: '8px' }}
        type={type || show ? 'text' : 'password'}
        value={value || ''}
        variant={variant}
        onChange={onChange}
      />
      {error && (
        <FormHelperText sx={{ color: 'error.main' }}>{error.message}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Input;
