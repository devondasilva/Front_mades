import React from 'react';
// import Slider from 'react-slick';
import Im1 from "../../assets/Images/beachtennis/freecompress-IMG_4482 (1).jpg";
import Im2 from "../../assets/Images/beachtennis/freecompress-IMG_4494 (2).jpg";
import Im3 from "../../assets/Images/beachtennis/freecompress-IMG_4508 (1).jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ImageSliderBanner: React.FC = () => {
    // const images = [Im1, Im2, Im3];

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true, // Pour que les images défilent automatiquement
    //     autoplaySpeed: 3000, // Définir l'intervalle de temps entre chaque image (en millisecondes)
    //     arrows: true,
    // };

    return (
        <div>

            <Carousel>
                 <div>
                    <img src={Im1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Im2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Im3} />
                    <p className="legend">Legend 3</p>
                </div>

            </Carousel>

            {/* <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 400, objectFit: 'cover' }} />
                    </div>
                ))}
            </Slider> */}
        </div>
    );
};


export default ImageSliderBanner;