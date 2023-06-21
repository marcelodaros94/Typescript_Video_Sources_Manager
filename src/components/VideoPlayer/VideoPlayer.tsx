import React, { FC, ReactElement, useRef, useEffect } from 'react';
import { Grid }  from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { goToNextVideo } from '../../redux/reducers';
import './VideoPlayer.css'

export const VideoPlayer: FC = (props): ReactElement => {
    const dispatch = useDispatch();
    const videoRef = useRef<ReactPlayer>(null);

    const videos = useSelector((state: any) => state.list);
    const currentVideoIndex = useSelector(
    (state: any) => state.currentVideoIndex
    );

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.seekTo(0);
        }
    }, [currentVideoIndex]);

    const handleVideoEnded = () => {
        dispatch(goToNextVideo());
    };

    return (
        <Grid item xs={12} sm={12} md={8} direction={'column'} spacing={2}> 
            <h2>Video Player</h2>
            {videos.length > 0 && videos[currentVideoIndex]?.links && (
            <ReactPlayer
                ref={videoRef}
                url={videos[currentVideoIndex].links[0].url}
                controls
                onEnded={handleVideoEnded}
                playing={true}
                className='videoPlayer'
                config={{
                  youtube: {
                    playerVars: { origin: 'http://localhost:3000' },
                  },
                }}
            />
            )}
        </Grid>
    );
};