import { configureStore } from '@reduxjs/toolkit';
import pluginReducer from "../plugin/common/slice";
import userReducer from '../user/common/slice';

const store = configureStore({
  reducer: {
    plugins: pluginReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
