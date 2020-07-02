import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { User } from '../api';

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
  initialState: new Map<string, Account>(),
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => {
      const newState = new Map(state);
      newState.set(action.payload.username, action.payload);
      return newState;
    },
    removeAccount: (state, action: PayloadAction<string>) => {
      const newState = new Map(state);
      newState.delete(action.payload);
      return newState;
    },
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

export function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    [accountsSlice.name]: accountsSlice.reducer,
    [signInSlice.name]: signInSlice.reducer,
  });
}
