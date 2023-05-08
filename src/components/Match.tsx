import React, { FC, ReactElement } from 'react';
import { Card, CardMedia, CardActions, Button, CardContent, Typography }  from '@mui/material';

interface IMatch {
    title?: string;
    image?: string;
    desc?: string;
} 

export const Match: FC<IMatch> = (props): ReactElement => {

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