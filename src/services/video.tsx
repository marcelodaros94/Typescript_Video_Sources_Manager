import axios from "axios";

const uploadNewVideo = async (formData: FormData) => {

    const requestOptions = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/video`,
        headers: {
            "Content-Type": "multipart/form-data",   
            //"Authorization": "Bearer "+localStorage.getItem("auth_token")
        },
        data: formData
    };

    return axios(requestOptions);
}

const getVideos = async () => {

    const requestOptions = {
        method: 'GET',
        url: `${process.env.REACT_APP_API_URL}/videos`,
        headers: {
            "Content-Type": "application/json",   
            "accept": "application/json"
        }
    };

    return axios(requestOptions)
}

const videoService = {
    uploadNewVideo, getVideos
}

export default videoService