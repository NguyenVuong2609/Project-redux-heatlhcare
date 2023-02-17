import { Avatar } from 'antd';
import * as picture from '../assets/Img/index';

export default function AvatarUser() {

  return (
    <Avatar
    size={{
      xs: 24,
      sm: 32,
      md: 40,
      lg: 64,
      xl: 80,
      xxl: 100,
    }}
    src={picture.avatar}
  />
  )
}
