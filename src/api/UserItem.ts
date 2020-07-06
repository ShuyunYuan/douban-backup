import LegacySubject from './LegacySubject';

export enum UserItemStatus {
  ATTEND = 'attend',
  WISH = 'wish',
  DO = 'do',
  COLLECT = 'collect',
}

export default interface UserItem {
  //celebrities: Celebrity[];
  status: UserItemStatus;
  total: number;
  type: string;
  //reviews: Review[];
  subjects: LegacySubject[];
}
