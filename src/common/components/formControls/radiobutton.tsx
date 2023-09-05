import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@mui/material';

import { ControlGroupProps } from '@/interfaces/formControls';

const RadioButtonGroup: FC<ControlGroupProps> = ({ name, label, options, direction }) => {
  const { control } = useFormContext();
  const {
    field: { onChange },
    fieldState: { error },
  } = useController({
    control,
    name: name,
  });

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <RadioGroup aria-labelledby={name} sx={{ flexDirection: direction }}>
        {options.map(({ key, value }) => (
          <FormControlLabel
            key={value}
            control={<Radio />}
            label={key}
            value={value}
            onChange={onChange}
          />
        ))}
      </RadioGroup>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default RadioButtonGroup;
