import { IconName } from '@/common/components/icons/mui-icons';

export interface ControlsBaseProps {
  label?: string;
  name: string;
}

export interface InputProps extends ControlsBaseProps {
  type?: string;
  variant: 'filled' | 'outlined' | 'standard';
  placeholder?: string;
  color?: string;
  passwordAdornment?: boolean;
  minRows?: number;
  iconName: IconName;
}

export interface ControlGroupProps extends ControlsBaseProps {
  options: { key: string; value: string }[];
  direction: string;
  variant?: 'soft' | 'outlined' | 'plain' | 'solid';
  placeholder?: string;
}

export interface CheckboxProps {
  name: string;
  label: string;
  value: string;
}
