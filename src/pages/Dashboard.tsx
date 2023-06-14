import React, { FC, ReactElement, useEffect } from 'react';
import { Grid }  from '@mui/material';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer'
import { Sidebar } from '../components/Sidebar/Sidebar'
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentVideoIndex, setVideoList } from '../redux/reducers';
import { VideosState, Video } from '../redux/types';
import axios from 'axios';

export const Dashboard: FC = (props): ReactElement => {

    const dispatch = useDispatch();
    const videoList = useSelector((state: VideosState) => state.list);

    useEffect(() => {
        
        const fetchVideoList = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/videos`);
            dispatch(setVideoList(response.data));
          } catch (error) {
            console.error('Error fetching video list:', error);
          }
        };    
        fetchVideoList();

    }, [dispatch]);
  

    return (    
        <Layout>            
            <Grid container spacing={2}>
                    <VideoPlayer />
                    <Sidebar videos={videoList} />
            </Grid>
        </Layout>
    )
}