import React from 'react';
import ImageGallery from './ImageGallery';
import imageData from './data';

const Gallery: React.FC = () => {
  return (
    <div>
      <ImageGallery images={imageData} />
    </div>
  );
};

export default Gallery;