import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { addVideoUrl, removeVideoUrl, setVideoUrl } from '../../../redux/reducers';

const VideoUrlField: React.FC = () => {
  const videoUrls = useSelector((state: any) => state.uploadNewVideo.videoUrls);
  const dispatch = useDispatch();

  const handleUrlChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    dispatch(setVideoUrl({ index, url: newUrl }));
  };

  const handleAddUrl = () => {
    dispatch(addVideoUrl(''));
  };

  const handleRemoveUrl = (index: number) => {
    dispatch(removeVideoUrl(index));
  };

  return (
    <div>
      {videoUrls.map((url: string, index: number) => (
        <div key={index}>
          <TextField
            label={`URL ${index + 1}`}
            value={url}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleUrlChange(index, event)}
          />
          <Button variant="outlined" color="error" onClick={() => handleRemoveUrl(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button variant="contained" onClick={handleAddUrl}>
        Add URL
      </Button>
    </div>
  );
};

export default VideoUrlField;
