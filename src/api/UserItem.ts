import LegacySubject from './LegacySubject';

export enum UserItemStatus {
  ATTEND = 'attend',
  COLLECT = 'collect',
  DOING = 'doing',
  WISH = 'wish',
}

export enum UserItemType {
  APP = 'app',
  BOOK = 'book',
  DRAMA = 'drama',
  EVENT = 'event',
  GAME = 'game',
  MOVIE = 'movie',
  MUSIC = 'music',
  REVIEW = 'review',
}

export default interface UserItem {
  //celebrities: Celebrity[];
  status: UserItemStatus;
  total: number;
  type: UserItemType;
  //reviews: Review[];
  subjects: LegacySubject[];
}
