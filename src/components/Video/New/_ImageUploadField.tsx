import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUploadedImage } from '../../../redux/reducers';
import { Box, Button, Typography } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';

const ImageUploadField: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const dispatch = useDispatch();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(file);
      dispatch(setUploadedImage(file));
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ width: '100%', p: 2, borderRadius: 1, border: '1px solid', borderColor: 'divider' }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="upload-image"
        style={{ display: 'none' }}
      />
      <label htmlFor="upload-image">
        <Button
          variant="contained"
          component="span"
          startIcon={<UploadIcon />}
          color="primary"
          sx={{ mb: 1 }}
        >
          Upload Image
        </Button>
      </label>
      {selectedImage && (
        <Typography variant="body2" color="text.primary">
          Selected Image: {selectedImage.name}
        </Typography>
      )}
    </Box>
  );
};

export default ImageUploadField;
