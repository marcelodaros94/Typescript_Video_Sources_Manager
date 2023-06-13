import React, { FC, ReactElement, useEffect } from 'react';
import { Grid }  from '@mui/material';
import { Video as VideoComponent } from '../components/Video/Video'
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentVideo, setVideoList } from '../redux/reducers';
import { RootState, Video } from '../redux/types';
import axios from 'axios';

export const Dashboard: FC = (props): ReactElement => {

    const dispatch = useDispatch();
    const videoList = useSelector((state: RootState) => state.list);

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
                <Grid item xs={12} sm={6} md={4}> 
                    {videoList.map((video, index) => (  
                        <VideoComponent key={index} title={video.title} image={video.image} desc={video.description} />    
                    ))}
                </Grid>
            </Grid>
        </Layout>
    )
}