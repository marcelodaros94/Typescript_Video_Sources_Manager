import React, { FC, ReactElement } from 'react';
import { Card, CardMedia, CardActions, Button, CardContent, Typography }  from '@mui/material';
import { Video as IVideo } from '../../redux/types';

export const Video: FC<IVideo> = (props): ReactElement => {

    return (         
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={process.env.REACT_APP_IMAGES_URL+props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add</Button>
                <Button size="small">Watch</Button>
            </CardActions>
        </Card>    
    )
}