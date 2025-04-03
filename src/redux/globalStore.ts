import globalSlice from './globalReducer';
import { configureStore } from '@reduxjs/toolkit';

const globalStore = configureStore(globalSlice);

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;

export default globalStore;
