import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Grid, Pagination }  from '@mui/material';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { SearchFilter } from '../components/SearchFilter/SearchFilter';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoList, selectPageInfo, setPage, setTotalPages, setCurrentVideoIndex } from '../redux/reducers';
import { VideosState, Video } from '../redux/types';
import videoService from '../services/video';

export const Dashboard: FC = (props): ReactElement => {

    const dispatch = useDispatch();
    const videoList = useSelector((state: VideosState) => state.list);
    const pageInfo = useSelector(selectPageInfo);
    const searchTerm = useSelector((state: VideosState) => state.searchTerm);
    const searchRating = useSelector((state: VideosState) => state.searchRating);

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

    useEffect(() => {        
        fetchVideoList(pageInfo.currentPage, searchTerm, searchRating);
    }, [pageInfo.currentPage, searchTerm, searchRating]);//se llama cada vez que cambie la variable de redux
  
    const handlePageChange = (event: any, page: number) => {
      dispatch(setPage(page));//cambia la variable de redux
      dispatch(setCurrentVideoIndex(0));//cambia la variable de redux
    };

    return (    
        <Layout>       
            <Grid container>    
              <SearchFilter />
              <VideoPlayer />
              <Sidebar videos={videoList} />
              <Pagination
                count={pageInfo.totalPages}
                page={pageInfo.currentPage}
                onChange={handlePageChange}
                sx={{ 
                  position: 'fixed', 
                  left: 0, 
                  bottom: 0, 
                  background: '#000000d4',
                  borderTopRightRadius: '5px' }}
              />
            </Grid>
        </Layout>
    )
}
