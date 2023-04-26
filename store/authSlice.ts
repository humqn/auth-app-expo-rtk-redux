import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

const initialState: string | null = '';

export const authSlice = createSlice({
  name: 'jwt',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set_jwt: (state, action: PayloadAction<string | null>) => {
      state = action.payload;
      /* Save jwt in localStorage */
      SecureStore.setItemAsync('jwt', action.payload);
      return state;
    },
    log_out: (state) => {
      /* Remove jwt from localStorage */
      SecureStore.deleteItemAsync('jwt');
      state = 'null';
      return state;
    },
  },
});
export const { set_jwt, log_out } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
