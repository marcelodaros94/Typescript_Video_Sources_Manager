import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Box, Grid, Input, Pagination }  from '@mui/material';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoList, selectPageInfo, setPage, setTotalPages, setSearchTerm } from '../redux/reducers';
import { VideosState, Video } from '../redux/types';
import videoService from '../services/video';

export const Dashboard: FC = (props): ReactElement => {

    const dispatch = useDispatch();
    const videoList = useSelector((state: VideosState) => state.list);
    const pageInfo = useSelector(selectPageInfo);
    const searchTerm = useSelector((state: VideosState) => state.searchTerm);

    const fetchVideoList = async (page: number, term: string) => {
      try {
        const response = await videoService.getVideos(page, term);
        dispatch(setVideoList(response.data.videos));
        dispatch(setTotalPages(response.data.totalPages));
      } catch (error) {
        console.error('Error fetching video list:', error);
      }
    };    

    useEffect(() => {        
        fetchVideoList(pageInfo.currentPage, searchTerm);
    }, [pageInfo.currentPage, searchTerm]);//se llama cada vez que cambie la variable de redux
  
    const handlePageChange = (event: any, page: number) => {
      dispatch(setPage(page));//cambia la variable de redux
    };

    const handleSearch = (event: any) => {
      dispatch(setSearchTerm(event.target.value));
    };

    return (    
        <Layout>       
            <Grid container>       
              <Input value={searchTerm} onChange={handleSearch} placeholder="Buscar videos" sx={{ width: '100%' }} />              
              <VideoPlayer />
              <Sidebar videos={videoList} />
              <Pagination
                count={pageInfo.totalPages}
                page={pageInfo.currentPage}
                onChange={handlePageChange}
                sx={{ position: 'fixed', left: 0, bottom: 0 }}
              />
            </Grid>
        </Layout>
    )
}