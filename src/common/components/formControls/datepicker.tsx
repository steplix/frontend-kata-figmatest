import { FormControl, FormHelperText, FormLabel } from '@mui/material';
import { FC } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import DateView from 'react-datepicker';

import { ControlsBaseProps } from '@/common/types/types';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker: FC<ControlsBaseProps> = ({ label, name }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: name,
    control,
  });

  return (
    <FormControl fullWidth>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <DateView name={name} selected={value} onChange={onChange} />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};

export default DatePicker;
