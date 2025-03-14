import React from 'react';
import Image from './Image';
import { ImageProps } from './types';

interface ImageGalleryProps {
  images: ImageProps[][];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {images.map((column, columnIndex) => (
      <div key={columnIndex} className="grid gap-4">
        {column.map((image, imageIndex) => (
          <Image key={imageIndex} src={image.src} alt={image.alt} />
        ))}
      </div>
    ))}
  </div>
);

export default ImageGallery;