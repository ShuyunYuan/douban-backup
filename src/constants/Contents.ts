import {
  AccountCircleOutlined, AppsOutlined, BookOutlined, EventNoteOutlined, LocalPlayOutlined, MovieOutlined,
  MusicNoteOutlined, SportsEsportsOutlined, SvgIconComponent,
} from '@material-ui/icons';

export enum ContentId {
  PROFILE= 'profile',
  BOOK = 'book',
  MOVIE = 'movie',
  MUSIC = 'music',
  GAME = 'game',
  APP = 'app',
  EVENT = 'event',
  DRAMA = 'drama',
}

export interface Content {
  id: ContentId;
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export const contents: Content[] = [
  {
    id: ContentId.PROFILE,
    icon: AccountCircleOutlined,
    title: '个人资料',
    description: 'TODO',
  },
  {
    id: ContentId.BOOK,
    icon: BookOutlined,
    title: '读书',
    description: 'TODO',
  },
  {
    id: ContentId.MOVIE,
    icon: MovieOutlined,
    title: '电影',
    description: 'TODO',
  },
  {
    id: ContentId.MUSIC,
    icon: MusicNoteOutlined,
    title: '音乐',
    description: 'TODO',
  },
  {
    id: ContentId.GAME,
    icon: SportsEsportsOutlined,
    title: '游戏',
    description: 'TODO',
  },
  {
    id: ContentId.APP,
    icon: AppsOutlined,
    title: '移动应用',
    description: 'TODO',
  },
  {
    id: ContentId.EVENT,
    icon: EventNoteOutlined,
    title: '同城活动',
    description: 'TODO',
  },
  {
    id: ContentId.DRAMA,
    icon: LocalPlayOutlined,
    title: '舞台剧',
    description: 'TODO',
  },
];
export default contents;

export const contentsMap = new Map<ContentId, Content>();
contents.forEach(content => contentsMap.set(content.id, content));
