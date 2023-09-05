import { IconName } from '@/common/components/icons/mui-icons';

export interface IAsideBar {
  avatarText: string;
  color: string;
  buttons: { iconName: IconName; label: string }[];
}
