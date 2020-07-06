import { connectRouter } from 'connected-react-router';
import omit from 'lodash.omit';
import { History } from 'history';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { ItemList, User } from '../api';

export interface Account {
  username: string;
  password: string;
  user: User;
}

const testAccount = {
  username: 'yuanshuyun1012@gmail.com',
  password: '',
  // @ts-ignore
  user: {
    reviews_count: 6,
    followed: false,
    uid: 'lunadreamson',
    following_count: 258,
    gallery_topics_count: 0,
    is_qq_bound: false,
    weibo_name: '',
    verify_works_count: 0,
    intro: '所发之言，不求惊人，人亦不惊',
    has_password: true,
    music_collected_count: 27,
    notes_count: 32,
    id: '50760198',
    loc: {
      id: '128400',
      name: 'San Francisco Bay Area',
      uid: 'sanfranciscobayarea'
    },
    reg_time: '2011-04-10 13:47:08',
    listeners_count: 0,
    joined_group_count: 47,
    show_fanta: false,
    owned_events_count: 0,
    book_collected_count: 191,
    is_weibo_bound: false,
    verify_name: '',
    movie_collected_count: 274,
    kind: 'user',
    user_hot_module_enabled: true,
    followers_count: 127,
    viewers_count: 0,
    readonly_message: '',
    is_phone_bound: true,
    verify_type: 0,
    updated_profile: true,
    display_followers_count: '127',
    ark_published_count: 0,
    type: 'user',
    email: 'yuanshuyun1012@gmail.com',
    avatar: 'https://qnmob3.doubanio.com/icon/ur50760198-4.jpg?imageMogr2/auto-orient/crop/!715x715a209a0/thumbnail/200x200/format/jpg/quality/90',
    phone_number: null,
    verify_roles: [],
    niffler_columns_count: 0,
    statuses_count: 2257,
    is_apple_bound: false,
    readers_count: 0,
    badge_count: 0,
    wechat_name: '',
    is_phone_verified: true,
    can_set_original: true,
    photo_albums_count: 3,
    birthday: null,
    has_set_profile: true,
    fanta_can_ask: false,
    qq_name: '',
    show_audience_count: false,
    fanta_enabled: false,
    subscribe_niffler_columns_count: 2,
    apple_name: '',
    show_cart: true,
    remark: '',
    dramas_count: 2,
    name: '朱玟',
    is_readonly: false,
    owned_doulist_count: 18,
    is_abnormal: false,
    gender: 'F',
    profile_banner: {
      is_default: false,
      large: 'https://qnmob3.doubanio.com/view/user_profile_banner/large/public/35f90451b9d2848.jpg?imageView2/0/q/80/w/640/h/640/format/webp',
      normal: 'https://qnmob3.doubanio.com/view/user_profile_banner/large/public/35f90451b9d2848.jpg?imageView2/0/q/80/w/640/h/640/format/webp'
    },
    verify_reason: '',
    uri: 'douban://douban.com/user/50760198',
    has_user_hot_module: false,
    is_subject_noviciate: false,
    medal_groups: [],
    url: 'https://www.douban.com/people/50760198/',
    following_doulist_count: 18,
    group_chat_count: 0,
    in_blacklist: false,
    large_avatar: 'https://qnmob3.doubanio.com/icon/ur50760198-4.jpg?imageView2/2/q/80/w/640/h/640/format/webp',
    is_wechat_bound: false,
    has_opened_archives: true,
    can_donate: false,
    is_normal: true
  } as User,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: { [testAccount.username]: testAccount } as { [key: string]: Account },
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => ({ ...state, [action.payload.username]: action.payload }),
    removeAccount: (state, action: PayloadAction<string>) => omit(state, [action.payload]),
  },
});
export const { addAccount, removeAccount } = accountsSlice.actions;

export interface SignInArgs {
  username: string;
  password: string;
}
export const signIn = createAsyncThunk('signIn', async (args: SignInArgs) => {
  return new Promise<User>(resolve => {
    console.log(args.username);
    window.setTimeout(() => {
      resolve(testAccount.user);
    }, 1000);
  });
});
const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    isPending: false,
    error: '',
    user: null as User | null,
  },
  reducers: {
    resetSignIn: () => ({
      isPending: false,
      error: '',
      user: null,
    }),
  },
  extraReducers: builder => builder
      .addCase(signIn.pending, () => ({
        isPending: true,
        error: '',
        user: null,
      }))
      .addCase(signIn.fulfilled, (state, action) => ({
        isPending: false,
        error: '',
        user: action.payload,
      }))
      .addCase(signIn.rejected, (state, action) => ({
        isPending: false,
        error: action.error.message!!,
        user: null,
      })),
});
export const { resetSignIn } = signInSlice.actions;

const backupUsernameSlice = createSlice({
  name: 'backupUsername',
  initialState: '',
  reducers: {
    setBackupUsername: (state, action: PayloadAction<string>) => action.payload,
    resetBackupUsername: () => '',
  }
})
export const { setBackupUsername, resetBackupUsername } = backupUsernameSlice.actions;

export interface AddUserItemListArgs {
  userId: string;
  itemList: ItemList;
}
const userItemListsSlice = createSlice({
  name: 'userItemLists',
  initialState: {} as { [key: string]: ItemList },
  reducers: {
    addUserItemList: (state, action: PayloadAction<AddUserItemListArgs>) =>
        ({ ...state, [action.payload.userId]: action.payload.itemList }),
    removeUserItemList: (state, action: PayloadAction<string>) => omit(state, [action.payload]),
  },
});
export const { addUserItemList, removeUserItemList } = userItemListsSlice.actions;

const testItemList: ItemList = {
  itemlist: [
// @ts-ignore
    { status: '', reviews: [], total: 6, type: 'review' },
// @ts-ignore
    { status: 'wish', total: 239, type: 'movie', subjects: [] },
// @ts-ignore
    { status: 'doing', total: 5, type: 'movie', subjects: [] },
// @ts-ignore
    { status: 'collect', total: 274, type: 'movie', subjects: [] },
// @ts-ignore
    { status: 'wish', total: 1, type: 'app', subjects: [] },
// @ts-ignore
    { status: 'collect', total: 3, type: 'app', subjects: [] },
// @ts-ignore
    { status: 'wish', total: 1, type: 'drama', subjects: [] },
// @ts-ignore
    { status: 'collect', total: 1, type: 'drama', subjects: [] },
// @ts-ignore
    { status: 'wish', total: 32, type: 'game', subjects: [] },
// @ts-ignore
    { status: 'collect', total: 19, type: 'game', subjects: [] },
// @ts-ignore
    { status: 'wish', total: 175, type: 'book', subjects: [] },
// @ts-ignore
    { status: 'doing', total: 23, type: 'book', subjects: [] },
// @ts-ignore
    { status: 'collect', total: 191, type: 'book', subjects: [] },
// @ts-ignore
    { status: 'wish', total: 6, type: 'music', subjects: [] },
// @ts-ignore
    { status: 'doing', total: 6, type: 'music', subjects: [] },
// @ts-ignore
    { status: 'collect', total: 27, type: 'music', subjects: [] },
// @ts-ignore
    { status: 'wish', total: 21, type: 'event', subjects: [] },
// @ts-ignore
    { status: 'attend', total: 30, type: 'event', subjects: [] }
  ],
};

export const fetchUserItemList = createAsyncThunk('fetchUserItemList', async (userId: string) => {
  return new Promise<ItemList>(resolve => {
    console.log(userId);
    window.setTimeout(() => {
      resolve(testItemList);
    }, 1000);
  });
});
const fetchUserItemListSlice = createSlice({
  name: 'fetchUserItemList',
  initialState: {
    isPending: false,
    error: '',
    itemList: null as ItemList | null,
  },
  reducers: {
    resetFetchUserItemList: () => ({
      isPending: false,
      error: '',
      itemList: null,
    }),
  },
  extraReducers: builder => builder
      .addCase(fetchUserItemList.pending, () => ({
        isPending: true,
        error: '',
        itemList: null,
      }))
      .addCase(fetchUserItemList.fulfilled, (state, action) => ({
        isPending: false,
        error: '',
        itemList: action.payload,
      }))
      .addCase(fetchUserItemList.rejected, (state, action) => ({
        isPending: false,
        error: action.error.message!!,
        itemList: null,
      })),
});
export const { resetFetchUserItemList } = fetchUserItemListSlice.actions;

export function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    [accountsSlice.name]: accountsSlice.reducer,
    [signInSlice.name]: signInSlice.reducer,
    [backupUsernameSlice.name]: backupUsernameSlice.reducer,
    [userItemListsSlice.name]: userItemListsSlice.reducer,
    [fetchUserItemListSlice.name]: fetchUserItemListSlice.reducer,
  });
}
