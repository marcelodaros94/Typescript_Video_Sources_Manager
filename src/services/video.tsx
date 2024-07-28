import axios from "axios";
import api from "./api"
import { IVideoService } from '../interfaces/videoServiceInterface';

class VideoService implements IVideoService {

    async uploadNewVideo(formData: FormData): Promise<{ files: File[] }>{

        const requestOptions = {
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/video`,
            headers: {
                "Content-Type": "multipart/form-data",   
                //"Authorization": "Bearer "+localStorage.getItem("auth_token")
            },
            data: formData
        };

        return api(requestOptions);
    }

    async getVideos(page: number, term: string, rating: number){
        
        const requestOptions = {
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/videos?page=${page}&search=${term}&rating=${rating}`,
            headers: {
                "Content-Type": "application/json",   
                "accept": "application/json"
            }
        };

        return api(requestOptions)
    }
}

export default new VideoService();