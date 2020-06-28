import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export interface Account {
  username: string;
  password: string;
  avatarUrl: string;
  name: string;
}

const testAccount = {
  username: 'yuanshuyun1012@gmail.com',
  password: '',
  avatarUrl: 'https://img9.doubanio.com/icon/ul50760198-4.jpg',
  name: '朱玟'
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: [testAccount] as Account[],
  reducers: {
    addAccount: (state, action: PayloadAction<Account>) => [...state, action.payload],
    removeAccount: (state, action: PayloadAction<string>) => state.filter(it => it.username !== action.payload),
  },
});
export const { addAccount, removeAccount } = accountsSlice.actions;

export const rootReducer = combineReducers({
  [accountsSlice.name]: accountsSlice.reducer,
});
