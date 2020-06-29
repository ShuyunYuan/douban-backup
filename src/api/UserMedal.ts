export enum UserMedalKind {
  ARK = 'ark_author',
  MUSIC = 'music_artist',
  YPY = 'ypy_photographer',
}

export interface UserMedalTarget {
  name: string;
  url: string;
}

export default interface UserMedal {
  icon: string;
  kind: UserMedalKind;
  kind_name: string;
  targets: UserMedalTarget[];
}
