import {
  AccountCircleOutlined, AppsOutlined, BookOutlined, DescriptionOutlined, EventNoteOutlined, ListAltOutlined,
  LocalPlayOutlined, MovieOutlined, MusicNoteOutlined, PeopleOutlined, PhotoAlbumOutlined, RateReviewOutlined,
  SportsEsportsOutlined, SvgIconComponent,
} from '@material-ui/icons';

import { ItemList, User, UserItemStatus, UserItemType } from '../api';

export enum ContentId {
  PROFILE = 'profile',
  FOLLOWSHIP = 'followship',
  DIARY = 'diary',
  REVIEW = 'review',
  PHOTO_ALBUM = 'photo_album',
  DOULIST = 'doulist',
  BOOK = 'book',
  MOVIE = 'movie',
  MUSIC = 'music',
  GAME = 'game',
  APP = 'app',
  EVENT = 'event',
  DRAMA = 'drama',
}

export interface ContentDescriptionArgs {
  user: User;
  itemList: ItemList;
}

export interface Content {
  id: ContentId;
  icon: SvgIconComponent;
  title: string;
  description: (args: ContentDescriptionArgs) => string;
}

function getItemTotal(args: ContentDescriptionArgs, type: UserItemType, status: UserItemStatus): number {
  return args.itemList.itemlist.find(it => it.type === type && it.status === status)?.total || 0
}

export const contents: Content[] = [
  {
    id: ContentId.PROFILE,
    icon: AccountCircleOutlined,
    title: '个人资料',
    description: args => args.user.name,
  },
  {
    id: ContentId.FOLLOWSHIP,
    icon: PeopleOutlined,
    title: '友邻',
    description: args => `关注${args.user.following_count}人，被${args.user.followers_count}人关注`,
  },
  {
    id: ContentId.DIARY,
    icon: DescriptionOutlined,
    title: '日记',
    description: args => `${args.user.notes_count}篇日记`,
  },
  {
    id: ContentId.REVIEW,
    icon: RateReviewOutlined,
    title: '评论',
    description: args => `${args.itemList.itemlist.find(it => it.type === UserItemType.REVIEW)?.total}条评论`,
  },
  {
    id: ContentId.PHOTO_ALBUM,
    icon: PhotoAlbumOutlined,
    title: '相册',
    description: args => `${args.user.photo_albums_count}个相册`,
  },
  {
    id: ContentId.DOULIST,
    icon: ListAltOutlined,
    title: '豆列',
    description: args => `${args.user.owned_doulist_count}个豆列`,
  },
  {
    id: ContentId.BOOK,
    icon: BookOutlined,
    title: '读书',
    description: args => `${
        getItemTotal(args, UserItemType.BOOK, UserItemStatus.WISH)
    }本想读，${
        getItemTotal(args, UserItemType.BOOK, UserItemStatus.DOING)
    }本在读，${
        getItemTotal(args, UserItemType.BOOK, UserItemStatus.COLLECT)
    }本读过`,
  },
  {
    id: ContentId.MOVIE,
    icon: MovieOutlined,
    title: '电影',
    description: args => `${
        getItemTotal(args, UserItemType.MOVIE, UserItemStatus.WISH)
    }部想看，${
        getItemTotal(args, UserItemType.MOVIE, UserItemStatus.DOING)
    }部在看，${
        getItemTotal(args, UserItemType.MOVIE, UserItemStatus.COLLECT)
    }部看过`,
  },
  {
    id: ContentId.MUSIC,
    icon: MusicNoteOutlined,
    title: '音乐',
    description: args => `${
        getItemTotal(args, UserItemType.MUSIC, UserItemStatus.WISH)
    }张想听，${
        getItemTotal(args, UserItemType.MUSIC, UserItemStatus.DOING)
    }张在听，${
        getItemTotal(args, UserItemType.MUSIC, UserItemStatus.COLLECT)
    }张听过`,
  },
  {
    id: ContentId.GAME,
    icon: SportsEsportsOutlined,
    title: '游戏',
    description: args => `${
        getItemTotal(args, UserItemType.GAME, UserItemStatus.WISH)
    }个想玩，${
        getItemTotal(args, UserItemType.GAME, UserItemStatus.DOING)
    }个在玩，${
        getItemTotal(args, UserItemType.GAME, UserItemStatus.COLLECT)
    }个玩过`,
  },
  {
    id: ContentId.APP,
    icon: AppsOutlined,
    title: '移动应用',
    description: args => `${
        getItemTotal(args, UserItemType.APP, UserItemStatus.WISH)
    }个想要，${
        getItemTotal(args, UserItemType.APP, UserItemStatus.COLLECT)
    }个用过`,
  },
  {
    id: ContentId.EVENT,
    icon: EventNoteOutlined,
    title: '同城活动',
    description: args => `${
        getItemTotal(args, UserItemType.EVENT, UserItemStatus.WISH)
    }个感兴趣，${
        getItemTotal(args, UserItemType.EVENT, UserItemStatus.ATTEND)
    }个想参加`,
  },
  {
    id: ContentId.DRAMA,
    icon: LocalPlayOutlined,
    title: '舞台剧',
    description: args => `${
        getItemTotal(args, UserItemType.DRAMA, UserItemStatus.WISH)
    }个想看，${
        getItemTotal(args, UserItemType.DRAMA, UserItemStatus.COLLECT)
    }个看过`,
  },
];
export default contents;

export const contentsMap = new Map<ContentId, Content>();
contents.forEach(content => contentsMap.set(content.id, content));
