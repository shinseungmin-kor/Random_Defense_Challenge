import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { value: false },
  reducers: {
    loginUser: (state, action) => {
      state.value = !state.value;
    },
  },
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

const testName = createSlice({
  name: 'name',
  initialState: { value: '철수' },
  reducers: {
    change: (state, action) => {
      if (state.value === '철수') {
        state.value = '영희';
      } else {
        state.value = '철수';
      }
    },
  },
});

export { userSlice, counterSlice, testName };
export const { loginUser } = userSlice.actions;
export const { up } = counterSlice.actions;
export const { change } = testName.actions;
