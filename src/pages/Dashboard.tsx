import React, { FC, ReactElement } from 'react';
import { Grid, Card, CardMedia, CardActions, Button, CardContent, Typography }  from '@mui/material';
import PropTypes from 'prop-types';

export const Dashboard: FC = (props: any): ReactElement => {
    //Destructuring and setting default value
    const { 
        title = 'Cody Rhodes vs MJF', 
        image = 'https://cdn.vox-cdn.com/thumbor/M8nixNwYirU7CoeuBXZTQC1V9gY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19756165/ER41nmVX0AUBqik.jpg',
        desc = 'AEW Revolution 2020'
    } = props;
    return (        
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>   
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Add</Button>
                        <Button size="small">Watch</Button>
                    </CardActions>
                </Card>    
            </Grid>
        </Grid>
    )
}

Dashboard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
}