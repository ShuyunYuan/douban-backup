import BaseFeedableItem from './BaseFeedableItem';
import ColorScheme from './ColorScheme';
import HeadInfo from './HeadInfo';
import Tag from './Tag';

export default interface Subject extends BaseFeedableItem {
  card_subtitle: string;
  color_scheme: ColorScheme;
  has_linewatch: boolean;
  head_info: HeadInfo;
  in_blacklist: boolean;
  is_restrictive: boolean;
  restrictive_icon_url: string;
  subtype: string;
  tags: Tag[];
}
