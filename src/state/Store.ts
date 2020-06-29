import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';

import { createRootReducer } from './Slices';

export const history = createBrowserHistory();
const store = configureStore({
  reducer: createRootReducer(history),
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), routerMiddleware(history)],
});
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
