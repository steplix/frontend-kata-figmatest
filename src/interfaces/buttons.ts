import { IconName } from '@/common/components/icons/mui-icons';

export interface ButtonsBaseProps {
  variant: 'text' | 'outlined' | 'contained';
  text: string;
  fullWidth: boolean;
  type: 'submit' | 'button';
  onClick?: () => void;
}

export interface IconAsideButtonProp {
  iconName: IconName;
  label: string;
  color: string;
  open: boolean;
}
