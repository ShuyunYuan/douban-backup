import Image from './Image';

export default interface SubjectBadge {
  bg_color: string;
  description: string;
  icon: Image;
  id: string;
  is_new: boolean;
  received_at: string;
  title: string;
  uri: string;
}
