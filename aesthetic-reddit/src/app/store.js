import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import smallPostReducer from '../features/smallPost/smallPostSlice';
import largePostReducer from '../features/largePost/largePostSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    smallPost: smallPostReducer,
    largePost: largePostReducer
  },
});
