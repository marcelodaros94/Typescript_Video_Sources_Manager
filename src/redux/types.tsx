export interface Video {
    id: number;
    title: string;
    description: string;
    image: string;
    links: Link[];
}
export interface Link {
    id: number;
    url: string;
    video_id: number;
}
export interface RootState {
    list: Video[];
    currentVideo: Video | null;
}