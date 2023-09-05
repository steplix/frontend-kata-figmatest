import {
  Person,
  Groups,
  Logout,
  PermIdentity,
  EditOutlined,
  MailOutlined,
  PersonAddAlt1Outlined,
  LockOutlined,
  AdminPanelSettingsOutlined,
  DeleteOutlineOutlined,
  Computer,
  VisibilityOutlined,
  LinkOutlined,
  TravelExplore,
  NotificationsOffOutlined,
  TipsAndUpdatesOutlined,
} from '@mui/icons-material';
import { SvgIconProps } from '@mui/material';

export type IconName =
  | 'userFill'
  | 'userOutlined'
  | 'accounts'
  | 'logout'
  | 'modify'
  | 'mail'
  | 'createUser'
  | 'lock'
  | 'security'
  | 'delete'
  | 'computer'
  | 'visibility'
  | 'link'
  | 'map'
  | 'notification'
  | 'idea';
const Icons: Record<IconName, React.ElementType<SvgIconProps>> = {
  userFill: Person,
  userOutlined: PermIdentity,
  accounts: Groups,
  logout: Logout,
  modify: EditOutlined,
  mail: MailOutlined,
  createUser: PersonAddAlt1Outlined,
  lock: LockOutlined,
  security: AdminPanelSettingsOutlined,
  delete: DeleteOutlineOutlined,
  computer: Computer,
  visibility: VisibilityOutlined,
  link: LinkOutlined,
  map: TravelExplore,
  notification: NotificationsOffOutlined,
  idea: TipsAndUpdatesOutlined,
};

export default Icons;
