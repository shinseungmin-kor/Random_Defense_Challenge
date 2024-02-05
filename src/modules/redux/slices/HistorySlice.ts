import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  historyDummy: [
    {
      key: 1,
      title: '괴짜 도전 챌린지',
      content: '괴짜히어로연합에서 추천하는 챌린지',
      isSuccess: false,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU',
    },
    {
      key: 2,
      title: '등산하기',
      content: '괴짜히어로연합에서 추천하는 챌린지',
      isSuccess: true,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU',
    },
    {
      key: 3,
      title: '헬스장 가기',
      content: '괴짜히어로연합에서 추천하는 챌린지',
      isSuccess: false,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU',
    },
  ],
  filter: 'ALL', // 초기값: 전체 데이터 보기
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export { historySlice };
export const { setFilter } = historySlice.actions;

export const getSuccessItems = (state: any) => {
  const { historyDummy } = state.history;
  return historyDummy.filter((item) => item.isSuccess);
};
