export interface Video {
    title: string;
    description: string;
    image: string;
}
export interface RootState {
    list: Video[];
    currentVideo: Video | null;
}