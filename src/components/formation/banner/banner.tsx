import React from "react";
import "./banner.css";


interface BannerProps {
  title: string;
  imageSrc: string;
  optionalText?: string;
}

const Banner: React.FC<BannerProps> = ({ title, imageSrc, optionalText }) => {


  return (
    <section className="relative">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold">{title= ""}</h1>
        {optionalText && <p className="mt-4 text-lg md:text-xl">{optionalText}</p>}
      </div>
    </section>
  );
};

export default Banner;
