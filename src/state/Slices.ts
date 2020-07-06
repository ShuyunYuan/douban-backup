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

const userItemListSlice = createSlice({
  name: 'userItemList',
  initialState: {} as { [key: string]: ItemList },
  reducers: {
    addUserItemList: (state, action: PayloadAction<[string, ItemList]>) =>
        ({ ...state, [action.payload[0]]: action.payload[1] }),
    removeUserItemList: (state, action: PayloadAction<string>) => omit(state, [action.payload]),
  },
});
export const { addUserItemList, removeUserItemList } = userItemListSlice.actions;

const testItemList: ItemList = {
  itemlist: []
};

export const fetchUserItemList = createAsyncThunk('fetchUserItemList', async (userId: string) => {
  return new Promise<[string, ItemList]>(resolve => {
    console.log(userId);
    window.setTimeout(() => {
      resolve([userId, testItemList]);
    }, 1000);
  });
});
const fetchUserItemListSlice = createSlice({
  name: 'fetchUserItemList',
  initialState: {
    isPending: false,
    error: '',
    userId: null as string | null,
    itemList: null as ItemList | null,
  },
  reducers: {
    resetFetchUserItemList: () => ({
      isPending: false,
      error: '',
      userId: null,
      itemList: null,
    }),
  },
  extraReducers: builder => builder
      .addCase(fetchUserItemList.pending, () => ({
        isPending: true,
        error: '',
        userId: null,
        itemList: null,
      }))
      .addCase(fetchUserItemList.fulfilled, (state, action) => ({
        isPending: false,
        error: '',
        userId: action.payload[0],
        itemList: action.payload[1],
      }))
      .addCase(fetchUserItemList.rejected, (state, action) => ({
        isPending: false,
        error: action.error.message!!,
        userId: null,
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
    [userItemListSlice.name]: userItemListSlice.reducer,
    [fetchUserItemListSlice.name]: fetchUserItemListSlice.reducer,
  });
}
