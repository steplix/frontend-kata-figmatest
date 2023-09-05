import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';

import { ControlGroupProps } from '@/interfaces/formControls';

const SelectControl: FC<ControlGroupProps> = ({ name, label, options }) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    control,
    name: name,
    defaultValue: '',
  });

  return (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select id={name} labelId={`${name}-label`} value={value} onChange={onChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.key}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default SelectControl;
