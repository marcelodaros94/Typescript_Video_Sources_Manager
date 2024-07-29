import React, { FC, ReactElement, useRef, useEffect } from 'react';
import { Grid }  from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { goToNextVideo } from '../../redux/reducers';
import './VideoPlayer.css'
import { addQueryParams } from '../../helpers/urlHelpers';

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
            <h2>{videos[currentVideoIndex]?.title} | {videos[currentVideoIndex]?.rating} stars</h2>
            {(videos.length > 0 && videos[currentVideoIndex]?.links && !videos[currentVideoIndex].links[0].url.includes('dailymotion')) && (
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
            {(videos.length > 0 && videos[currentVideoIndex]?.links && videos[currentVideoIndex].links[0].url.includes('dailymotion')) && (
            <div style={{position:'relative',paddingBottom:'60%',height:0,overflow:'hidden'}}> 
                <iframe style={{width:'100%',height:'100%',position:'absolute',left:'0px',top:'0px',overflow:'hidden'}} 
                  src={addQueryParams(videos[currentVideoIndex].links[0].url,{'ui-fullscreen': 'true','queue-enable': 'false', 'ui-logo': 'false', 'ui-start-screen-info': 'false', 'ui-show-menu': 'false'})} width="100%" height="100%" allow="autoplay; web-share"> 
                </iframe> 
            </div>
            )}
        </Grid>
    );
};