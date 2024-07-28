import React, { FC, ReactElement } from 'react';
import { Grid }  from '@mui/material';
import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { SearchFilter } from '../components/SearchFilter/SearchFilter';
import Layout from '../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { VideosState } from '../redux/types';
import useFetchVideos from '../hooks/useFetchVideos';
import Pagination from '../components/Pagination/Pagination';

export const Dashboard: FC = (props): ReactElement => {

  useFetchVideos();
  const videoList = useSelector((state: VideosState) => state.list);

  return (    
        <Layout>       
            <Grid container>    
              <SearchFilter />
              <VideoPlayer />
              <Sidebar videos={videoList} />
              <Pagination />
            </Grid>
        </Layout>
    )
}
