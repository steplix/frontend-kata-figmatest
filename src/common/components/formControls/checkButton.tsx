import { FormControl, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { CheckboxProps } from '@/interfaces/formControls';

const CheckboxButton: FC<CheckboxProps> = ({ name, label, value }) => {
  const { control } = useFormContext();
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    name: name,
    control,
  });

  return (
    <FormControl>
      <FormControlLabel
        control={<Checkbox name={name} />}
        label={label}
        value={value}
        onChange={onChange}
      />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxButton;
