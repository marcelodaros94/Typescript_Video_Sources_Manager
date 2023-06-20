export interface Video {
    id?: number;
    title: string;
    description: string;
    rating?: number;
    image: string;
    links?: Link[];
    brand: string;
    index: number;
}
export interface Link {
    id: number;
    url: string;
    video_id: number;
}
export interface VideosState {
  list: Video[];
  currentVideoIndex: number;
  uploadNewVideo: NewVideoState;  
  pageInfo: {
    currentPage: number,
    totalPages: number
  },
  searchTerm: string,
  isLoading: boolean
}
export interface NewVideoState{  
  videoTitle: string;
  videoDescription: string;
  videoRating: number;
  videoUrls: string[];
  uploadedImage: File | null;
  videoBrand: string;
}