import Achievement from './Achievement';
import GamePlatform from './GamePlatform';
import InterestEncourage from './InterestEncourage';
import LegacySubject from './LegacySubject';
import Rating from './Rating';
import SubjectBadge from './SubjectBadge';
import User from './User';

export enum InterestMarkStatus {
  ATTEND = "attend",
  DOING = "doing",
  DONE = "done",
  MARK = "mark",
  UNMARK = "unmark",
}

export default interface Interest {
  achievements: Achievement[];
  attend_time: string;
  badges: SubjectBadge[];
  card_subtitle: string;
  comment: string;
  create_time: string;
  encourage: InterestEncourage;
  id: string;
  done_index: number;
  index: number;
  is_edit: boolean;
  is_latest: boolean;
  is_private: boolean;
  is_voted: boolean;
  platforms: GamePlatform[];
  popular_tags: String[];
  quick_mark: boolean;
  rating: Rating;
  sharing_text: string;
  sharing_url: string;
  status: InterestMarkStatus;
  subject: LegacySubject;
  tags: string[];
  uri: string;
  user: User;
  vote_count: number;
}
