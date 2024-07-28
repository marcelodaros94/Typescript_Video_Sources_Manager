// hooks/useUploadVideo.ts
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { VideosState } from '../redux/types';
import { resetForm } from '../redux/reducers';
import { IVideoService } from '../interfaces/videoServiceInterface';

const useUploadVideo = (videoService: IVideoService) => {
  const dispatch = useDispatch();
  const videoTitle = useSelector((state: VideosState) => state.uploadNewVideo.videoTitle);
  const videoDescription = useSelector((state: VideosState) => state.uploadNewVideo.videoDescription);
  const videoRating = useSelector((state: VideosState) => state.uploadNewVideo.videoRating);
  const videoUrls = useSelector((state: VideosState) => state.uploadNewVideo.videoUrls);
  const uploadedImage = useSelector((state: VideosState) => state.uploadNewVideo.uploadedImage);
  const videoBrand = useSelector((state: VideosState) => state.uploadNewVideo.videoBrand);

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (videoTitle.trim() === '') return;
    const nonEmptyUrls = videoUrls.filter((url: string) => url.trim() !== '');
    if (nonEmptyUrls.length === 0) return;
    if (!uploadedImage) return;

    const formData = new FormData();
    formData.append('title', videoTitle);
    formData.append('description', videoDescription);
    formData.append('rating', String(videoRating));
    formData.append('type', 'M');
    formData.append('links', JSON.stringify(videoUrls.map((url) => ({ url }))));
    formData.append('image', uploadedImage);
    formData.append('brand', String(videoBrand));

    try {
      await videoService.uploadNewVideo(formData);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
    setUploadedFiles([]);
  };

  return { handleSubmit, handleReset, uploadedFiles };
};

export default useUploadVideo;
