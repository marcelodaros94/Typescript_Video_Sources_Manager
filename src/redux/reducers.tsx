import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Video } from './types';

interface VideosState {
  list: Video[];
  currentVideo: Video | null;
}

const initialState: VideosState = {
  list: [],
  currentVideo: null,
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideoList: (state, action: PayloadAction<Video[]>) => {
      state.list = action.payload;
    },
    setCurrentVideo: (state, action: PayloadAction<Video>) => {
      state.currentVideo = action.payload;
    },
  },
});

export const { setVideoList, setCurrentVideo } = videosSlice.actions;

export const rootReducer = videosSlice.reducer;
