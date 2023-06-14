import React, { ChangeEvent, FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setVideoTitle } from '../../../redux/reducers';

export const VideoTitleField: FC = (): ReactElement => {

    const dispatch = useDispatch();
  
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newTitle = event.target.value;
      dispatch(setVideoTitle(newTitle));
    };
  
    return(
        <TextField id="outlined-basic" label="Title" variant="outlined" onChange={handleTitleChange} />
    );

}