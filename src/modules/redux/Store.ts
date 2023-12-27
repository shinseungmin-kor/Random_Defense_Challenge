import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, testName, userSlice } from './slices/CounterSlice';

const store = configureStore({
  reducer: {
    loginUser: userSlice.reducer,
    counter: counterSlice.reducer,
    name: testName.reducer,
  },
});

export default store;
