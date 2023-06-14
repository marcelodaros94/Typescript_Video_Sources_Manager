import React, { FC, ReactElement, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setVideoDescription } from '../../../redux/reducers';

export const VideoDescriptionField: FC = (): ReactElement => {

    const dispatch = useDispatch();
  
    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newDescription = event.target.value;
      dispatch(setVideoDescription(newDescription));
    };

    return(
        <TextField id="outlined-basic" label="Description" variant="outlined" onChange={handleDescriptionChange} />
    );

}