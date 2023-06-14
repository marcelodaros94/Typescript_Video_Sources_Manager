import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUploadedImage } from '../../../redux/reducers';

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
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <p>Selected Image: {selectedImage.name}</p>}
    </div>
  );
};

export default ImageUploadField;
