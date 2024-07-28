import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { setVideoUrl } from '../../../redux/reducers';

const VideoUrlField: React.FC = () => {
  const dispatch = useDispatch();

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    dispatch(setVideoUrl(newUrl));
  };

  return (
    <div>
      <TextField
        fullWidth
        id="outlined-basic" label="URL" variant="outlined" 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleUrlChange(event)}
      />
    </div>
  );
};

export default VideoUrlField;
