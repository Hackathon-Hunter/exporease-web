import { configureStore } from '@reduxjs/toolkit';
import businessSetupReducer from './businessSetup.store';

export const store = configureStore({
  reducer: {
    businessSetup: businessSetupReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
