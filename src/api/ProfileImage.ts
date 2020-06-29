import Image from './Image';

export default interface ProfileImage extends Image {
  color: string;
  is_default: boolean;
}
