import React, { FC, ReactElement, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setVideoRating } from '../../../redux/reducers';

export const VideoRatingField: FC = (): ReactElement => {

    const dispatch = useDispatch();
  
    const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newRating = parseFloat(event.target.value);
      dispatch(setVideoRating(newRating));
    };

    return(
        <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={handleRatingChange} 
        fullWidth
        inputProps={{
          inputMode: 'decimal', // Indica al teclado del dispositivo que se acepten números y decimales
          pattern: '^\\d*\\.?\\d*$' // Patrón para asegurar que solo se ingresen números y decimales
        }}/>
    );

}