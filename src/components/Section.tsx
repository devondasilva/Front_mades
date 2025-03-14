import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SectionProps {
  title?: string;
  subtitle?: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  buttonText?: string;
  buttonText2?: string;
  buttonLink?: string;
  buttonLink2?: string;
  additionnalContent?: React.ReactNode;
  subtitleColor?: string;
  subtitleBgColor?: string;
  textcolor?: string;
  aosStyle?: string;

}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  text,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  buttonText,
  buttonText2,
  buttonLink = "#",
  buttonLink2 = "#",
  additionnalContent,
  subtitleColor,
  subtitleBgColor,
  textcolor,
  aosStyle
}) => {

  AOS.init();
  return (
    <div className="mt-10 mx-auto flex flex-col items-center px-4 lg:mr-20 lg:ml-20 " data-aos={aosStyle} >
      <div
        className={`flex flex-col md:flex-row items-center gap-6 ${
          imagePosition === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Section Image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-[300px] md:h-[350px] rounded-3xl"
          />
        </div>

        {/* Section Texte et Contenu */}
        <div
          className={`w-full md:w-1/2 ${
            imagePosition === "right" ? "lg:pr-10" : "lg:pl-10"
          } text-center md:text-left`}
        >
          {/* Sous-titre */}
          {subtitle && (
            <p
              className="mb-2 font-bold rounded-xl text-xl md:text-2xl leading-[32px]"
              style={{
                color: subtitleColor,
                backgroundColor: subtitleBgColor,
                display: "inline-block",
                // padding: "0.5rem 1rem",
                fontFamily:"Lexend2",
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Titre */}
          {title && (
            <h1 className="text-xl md:text-2xl text-black mb-2"
              style={{
                fontFamily:"Lexend",
              }}
            >
              {title}
            </h1>
          )}

          {/* Texte principal */}
          <p className="mb-6  leading-6  mx-auto md:mx-0"
          style={{
            color: textcolor,
            fontSize: "15px",
        }}
        >
            
            {text}
          </p>

          {/* Contenu additionnel */}
          {additionnalContent && <div className="mb-6">{additionnalContent}</div>}

          {/* Boutons */}
          {(buttonText || buttonText2) && (
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4 justify-center items-center md:justify-start">
              {buttonText && (
                <Link to={buttonLink}>
                  <Button text={buttonText} />
                </Link>
              )}
              {buttonText2 && (
                <Link to={buttonLink2}>
                  <Button text={buttonText2} variant="outline" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;