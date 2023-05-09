import React, { FC, ReactElement } from 'react';
import { Grid }  from '@mui/material';
import { Video } from '../components/Video/Video'
import Layout from '../components/Layout/Layout';

export const Dashboard: FC = (props): ReactElement => {

    //Destructuring and setting default value
    const data = { 
        title: 'Cody Rhodes vs MJF', 
        image: 'https://cdn.vox-cdn.com/thumbor/M8nixNwYirU7CoeuBXZTQC1V9gY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19756165/ER41nmVX0AUBqik.jpg',
        desc: 'AEW Revolution 2020'
    };

    return (    
        <Layout>            
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>   
                    <Video title={data.title} image={data.image} desc={data.desc} />    
                </Grid>
            </Grid>
        </Layout>
    )
}