import ArticleIntro from './ArticleIntro';
import Image from './Image';
import Interest from './Interest';
import LegacySubjectSeries from './LegacySubjectSeries';
import MovieHonor from './MovieHonor';
import OtherVersion from './OtherVersion';
import Rating from './Rating';
import Subject from './Subject';
import UgcTab from './UgcTab';

export default interface LegacySubject extends Subject {
  alg_json: string;
  alg_recommend: string;
  article_intros: ArticleIntro[];
  body_bg_color: string;
  comment_count: number;
  forum_topic_count: number;
  gallery_topic_count: number;
  has_joined: boolean;
  has_rated: boolean;
  header_bg_color: string;
  honor_infos: MovieHonor[];
  interest: Interest;
  intro: string;
  intro_abstract: string;
  is_douban_intro: boolean;
  null_rating_reason: string;
  other_version: OtherVersion;
  pic: Image;
  rating: Rating;
  series: LegacySubjectSeries;
  tips: string[];
  review_count: number;
  ugc_tabs: UgcTab[];
  vendor_count: number;
}
