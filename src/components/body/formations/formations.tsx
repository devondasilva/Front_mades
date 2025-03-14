import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Autoplay } from "swiper/modules"; // Importe le module de navigation
import Formation from "./formation";
import Im1 from "../../../assets/Images/beachtennis/freecompress-IMG_4528 (1).jpg";
import Im2 from "../../../assets/Images/padel/freecompress-IMG_3333.jpg";
import Im3 from "../../../assets/Images/autres/freecompress-img4_tennis.jpg";
import Im4 from "../../../assets/Images/squash/squash-01.jpg";

const images = [
  {
    imageUrl: Im1,
    title: "Beach Tennis",
    description: "Découvrez le beach tennis, une discipline dynamique combinant le tennis traditionnel et l'esprit de la plage. Apprenez les techniques spécifiques pour exceller ...",
    link: "/Formation/BeachTennis",
  },
  {
    imageUrl: Im2,
    title: "Padel",
    description: "Le padel est un sport en plein essor qui combine des éléments de tennis et de squash. Apprenez les bases, les techniques avancées et comment maîtriser ce sport ...",
    link: "/Formation/Padel",
  },
  {
    imageUrl: Im3,
    title: "Tennis classique",
    description: "Le tennis est l'un des sports les plus emblématiques au monde. Découvrez les bases et les stratégies pour devenir un joueur accompli, que ce soit en preparation ...",
    link: "/Formation/Tennis",
  },
  {
    imageUrl: Im4,
    title: "Squash",
    description: "Plongez dans l'univers du squash, un sport intense et stratégique. Développez votre rapidité, votre endurance et vos réflexes tout en apprenant à anticiper et ...",
    link: "/Formation/Squash",
  },
];

const Formations: React.FC = () => {
  return (
    <div className="flex justify-center p-5">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Empêche l'arrêt de l'autoplay au clic
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide sur les très petits écrans
          },
          768: {
            slidesPerView: 2, // 2 slides sur les écrans moyens
          },
          1024: {
            slidesPerView: 3, // 3 slides sur les grands écrans
          },
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Formation {...image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default Formations;
