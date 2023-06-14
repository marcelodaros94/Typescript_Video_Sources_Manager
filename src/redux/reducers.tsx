import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Video, VideosState } from './types';

const initialState: VideosState = {
  list: [],
  currentVideoIndex: 0,
  uploadNewVideo: {
    videoTitle: '',
    videoDescription: '',
    videoRating: 3.75,
    videoUrls: [''],
    uploadedImage: null
  }
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    //reproduction
    setVideoList: (state, action: PayloadAction<Video[]>) => {
      state.list = action.payload;
    },
    setCurrentVideoIndex: (state, action: PayloadAction<number>) => {
      state.currentVideoIndex = action.payload;
    },
    goToNextVideo: (state) => {
      state.currentVideoIndex =
        (state.currentVideoIndex + 1) % state.list.length;
    },
    //uploading
    setVideoTitle: (state, action: PayloadAction<string>) => {
      state.uploadNewVideo.videoTitle = action.payload;
    },
    setVideoDescription: (state, action: PayloadAction<string>) => {
      state.uploadNewVideo.videoDescription = action.payload;
    },
    setVideoRating: (state, action: PayloadAction<number>) => {
      state.uploadNewVideo.videoRating = action.payload;
    },
    addVideoUrl: (state, action: PayloadAction<string>) => {
      state.uploadNewVideo.videoUrls.push(action.payload);
    },
    removeVideoUrl: (state, action: PayloadAction<number>) => {
      state.uploadNewVideo.videoUrls.splice(action.payload, 1);
    },
    setVideoUrl: (state, action: PayloadAction<{ index: number; url: string }>) => {
      const { index, url } = action.payload;
      state.uploadNewVideo.videoUrls[index] = url;
    },
    setUploadedImage: (state, action: PayloadAction<File | null>) => {
      state.uploadNewVideo.uploadedImage = action.payload;
    },
    resetForm: (state) => {
      state.uploadNewVideo = {
        videoTitle: '',
        videoDescription: '',
        videoRating: 3.75,
        videoUrls: [''],
        uploadedImage: null
      }
    }
  },
});

export const { 
  setVideoList, 
  setCurrentVideoIndex, 
  goToNextVideo, 
  setVideoTitle,
  setVideoDescription,
  setVideoRating,
  addVideoUrl,
  removeVideoUrl,
  setVideoUrl,
  setUploadedImage,
  resetForm } = videosSlice.actions;

export const rootReducer = videosSlice.reducer;
