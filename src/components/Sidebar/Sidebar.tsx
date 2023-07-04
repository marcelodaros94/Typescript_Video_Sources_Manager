import React, { FC, ReactElement, useEffect } from 'react';
import { Grid }  from '@mui/material';
import { Video as VideoComponent } from '../Video/Video'
import { VideosState, Video } from '../../redux/types';

interface SidebarProps {
    videos: Video[];
}

export const Sidebar: FC<SidebarProps> = ({ videos }): ReactElement => { 
    return (         
        <Grid item xs={12} sm={12} md={4} direction={'column'} spacing={2}> 
            {videos.map((video, index) => (  
                <VideoComponent key={video.id} index={index} title={video.title} image={video.image} description={video.description} brand={video.brand}/>    
            ))}
        </Grid>
    )
}