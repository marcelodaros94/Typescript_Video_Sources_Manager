import React, { FC, ReactElement } from 'react';
import { Card, CardMedia, CardActions, Button, CardContent, Typography }  from '@mui/material';

interface IVideo {
    title: string;
    desc: string;
    image: string;
}
  
interface IMatch extends IVideo {
    rating?: number;
}

export const Video: FC<IVideo | IMatch> = (props): ReactElement => {

    return (         
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add</Button>
                <Button size="small">Watch</Button>
            </CardActions>
        </Card>    
    )
}