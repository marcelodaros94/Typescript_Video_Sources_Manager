import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoBrand } from '../../../redux/reducers';
import { SelectChangeEvent, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { VideosState } from '../../../redux/types';

const VideoBrandField: React.FC = () => {

  const brand = useSelector((state: VideosState) => state.uploadNewVideo.videoBrand);
  const dispatch = useDispatch();

  const handleBrandChange = (event: SelectChangeEvent<string>) => {
    const selectedBrandId = event.target.value;
    dispatch(setVideoBrand(selectedBrandId));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="brand-label">Brand</InputLabel>
      <Select
        labelId="brand-label"
        id="brand-select"
        value={brand}
        onChange={handleBrandChange}
        label="Brand"
      >
        <MenuItem value="1">WWE</MenuItem>
        <MenuItem value="2">AEW</MenuItem>
        <MenuItem value="3">IMPACT</MenuItem>
        <MenuItem value="4">NJPW</MenuItem>
        <MenuItem value="5">ROH</MenuItem>
        <MenuItem value="6">OTHERS</MenuItem>
      </Select>
    </FormControl>
  );
};

export default VideoBrandField;
