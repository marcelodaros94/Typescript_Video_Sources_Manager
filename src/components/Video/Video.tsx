import React, { FC, ReactElement } from 'react';
import { Card, CardMedia, CardActions, Button, CardContent, Typography }  from '@mui/material';
import { Video as IVideo } from '../../redux/types';
import { useDispatch } from 'react-redux';
import { setCurrentVideoIndex } from '../../redux/reducers';
import '../Sidebar/Sidebar.css';

export const Video: FC<IVideo> = (props): ReactElement => {
    const dispatch = useDispatch();
    
    const handleClick = (index: number) => {
        ScrollToTopButton();
        dispatch(setCurrentVideoIndex(index));
    };
    const ScrollToTopButton = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    return (         
        <Card className='mt_mobile' onClick={() => handleClick(props.index)}
        sx={{
          '&:hover': {
            '& .MuiCardContent-root': {
              backgroundColor: '#21b6ae', // Cambia el color de fondo del CardContent en hover
            },
          },
        }}> 
            <CardMedia
                sx={{ height: 140, backgroundPosition: '50% 0' }}
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
        </Card>    
    )
}