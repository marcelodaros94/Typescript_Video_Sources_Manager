import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setVideoList, setTotalPages, setCurrentVideoIndex } from '../redux/reducers';
import { VideosState } from '../redux/types';
import videoService from '../services/video';

export {}

const useFetchVideos = () => {
  const dispatch = useDispatch();
  const pageInfo = useSelector((state: VideosState) => state.pageInfo);
  const searchTerm = useSelector((state: VideosState) => state.searchTerm);
  const searchRating = useSelector((state: VideosState) => state.searchRating);

  useEffect(() => {
    const fetchVideoList = async (page: number, term: string, rating: number) => {
      try {
        const response = await videoService.getVideos(page, term, rating);
        dispatch(setVideoList(response.data.videos));
        dispatch(setTotalPages(response.data.totalPages));
        dispatch(setCurrentVideoIndex(0));
      } catch (error: any) {
        if (error.response && error.response.status === 503) {
          alert('Servidor en modo reposo. Intente más tarde.');
        }
      }
    };

    fetchVideoList(pageInfo.currentPage, searchTerm, searchRating);
  }, [pageInfo.currentPage, searchTerm, searchRating, dispatch]);
};

export default useFetchVideos;
