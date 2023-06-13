import React, { FC, ReactElement, useEffect } from 'react';
import { Grid }  from '@mui/material';
import { Video as VideoComponent } from '../Video/Video'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentVideoIndex, setVideoList } from '../../redux/reducers';
import { RootState, Video } from '../../redux/types';
import axios from 'axios';

interface SidebarProps {
    videos: Video[];
}

export const Sidebar: FC<SidebarProps> = ({ videos }): ReactElement => {

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
        <Grid item xs={12} sm={12} md={4}> 
            {videoList.map((video, index) => (  
                <VideoComponent key={index} title={video.title} image={video.image} desc={video.description} />    
            ))}
        </Grid>
    )
}