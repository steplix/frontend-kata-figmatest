import { IconName } from '@/common/components/icons/mui-icons';

export interface IDropdownButton {
  color: string;
  menuItems: { color: string; iconName: IconName; text: string }[];
}
