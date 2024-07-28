import { Video } from "../redux/types";

export interface IVideoService {
    getVideos(page: number, term: string, rating: number): Promise<{ data: { videos: Video[], totalPages: number } }>;
    uploadNewVideo(formData: FormData): Promise<{[key: string]: unknown}>;
}
  