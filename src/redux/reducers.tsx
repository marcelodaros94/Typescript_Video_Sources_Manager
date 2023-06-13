import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Video } from './types';

interface VideosState {
  list: Video[];
  currentVideoIndex: number;
}

const initialState: VideosState = {
  list: [],
  currentVideoIndex: 0,
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideoList: (state, action: PayloadAction<Video[]>) => {
      state.list = action.payload;
    },
    setCurrentVideoIndex: (state, action: PayloadAction<number>) => {
      state.currentVideoIndex = action.payload;
    },
    goToNextVideo: (state) => {
      state.currentVideoIndex =
        (state.currentVideoIndex + 1) % state.list.length;
    }
  },
});

export const { setVideoList, setCurrentVideoIndex, goToNextVideo } = videosSlice.actions;

export const rootReducer = videosSlice.reducer;
