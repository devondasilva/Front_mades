import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <div>
    <img className="h-auto max-w-full rounded-lg" src={src} alt={alt} />
  </div>
);

export default Image;