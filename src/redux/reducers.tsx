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
    uploadedImage: null,
    videoBrand: ''
  },
  pageInfo: {
    currentPage: 1,
    totalPages: 1,
  },
  searchTerm: '',
  searchRating: 3,
  isLoading: false
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
    setVideoUrl: (state, action: PayloadAction<string>) => {
      state.uploadNewVideo.videoUrls[0] = action.payload;
    },
    setUploadedImage: (state, action: PayloadAction<File | null>) => {
      state.uploadNewVideo.uploadedImage = action.payload;
    },
    setVideoBrand: (state, action: PayloadAction<string>) => {
      state.uploadNewVideo.videoBrand = action.payload;
    },
    resetForm: (state) => {
      state.uploadNewVideo = {
        videoTitle: '',
        videoDescription: '',
        videoRating: 3.75,
        videoUrls: [''],
        uploadedImage: null,
        videoBrand: '',
      }
    },
    //pagination    
    setPage: (state, action: PayloadAction<number>) => {
      state.pageInfo.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.pageInfo.totalPages = action.payload;
    },
    //search
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    //loading
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    //rating    
    incrementRating: (state) => {
      state.searchRating = Math.min(state.searchRating + 1, 6);
    },
    decrementRating: (state) => {
      state.searchRating = Math.max(state.searchRating - 1, 1);
    },
    setRating: (state, action: PayloadAction<number>) => {
      const newValue = action.payload;
      if (!isNaN(newValue) && newValue >= 1 && newValue <= 6) {
        state.searchRating = newValue;
      }
    },
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
  setVideoBrand,
  resetForm,
  setPage,
  setTotalPages,
  setSearchTerm,
  startLoading, 
  stopLoading,
  setRating,
  decrementRating,
  incrementRating
} = videosSlice.actions;

export const selectPageInfo = (state: VideosState) => state.pageInfo;

export const rootReducer = videosSlice.reducer;
