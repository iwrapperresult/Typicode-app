import { configureStore } from '@reduxjs/toolkit';
import pluginReducer from "./slice"

const store = configureStore({
  reducer: {
    plugins: pluginReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;