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
    id: 50760198,
    large_avatar: 'https://img9.doubanio.com/icon/ul50760198-4.jpg',
    name: '朱玟',
    uid: 'lunadreamson',
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
