import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next"; // Importez useTranslation

interface StatItemProps {
  number: string;
  titre: string;
  content?: string;
  aosStyle?: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, titre, content, aosStyle }) => {
  AOS.init();
  const { t } = useTranslation(); // Utilisez useTranslation
  return (
    <div className="stat flex flex-col items-center justify-center text-center" data-aos={aosStyle}>
      <a href="#" className="text-black">
        <span
          className="text-4xl md:text-5xl font-bold block"
          style={{ fontFamily: "Lexend2" }}
        >
          {number}
        </span>
        <span className="text-lg text-black block">{t(titre)}</span>
        {content && <span className="text-sm text-black block">{t(content)}</span>}
      </a>
    </div>
  );
};

const Stat: React.FC = () => {
  const { t } = useTranslation(); // Utilisez useTranslation

  const Val = [
    { number: "50+", titre: "Pays du Monde", content: "Présents dans plus de 50 pays.", aosStyle: "flip-left" },
    { number: "15+", titre: "Coach placés", content: "Des coachs placés à l'international.", aosStyle: "flip-left" },
    { number: "12+", titre: "Années d'expériences", content: "Plus de 12 années d'expérience.", aosStyle: "flip-left" },
    { number: "30+", titre: "Partenaires", content: "Trente partenaires engagés avec nous.", aosStyle: "flip-left" },
  ];

  AOS.init();
  return (
    <div className="flex justify-center py-8 mt-4">
      <div className="w-full max-w-[1200px] flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 p-8 items-stretch">
          {/* Left Side: Statistics */}
          <div className="grid grid-cols-2 gap-10 flex-1 p-4 items-center justify-center text-center" >
            {Val.map((item, index) => (
              <StatItem
                key={`stat-${index}`}
                number={item.number}
                titre={item.titre}
                content={item.content}
                aosStyle={item.aosStyle}
              />
            ))}
          </div>

          {/* Right Side: Heading and Newsletter */}
          <div className="flex-1 p-4" data-aos="fade-left">
            <h1
              className="text-left my-4 text-3xl font-semibold text-[#000000]"
              style={{ fontFamily: "Lexend2" }}
            >
              {t("Nous sommes la solution pour une jeunesse engagée dans la cité")}
            </h1>
            <div>
              {/* Form */}
              <form className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-md w-full lg:w-auto space-y-1 sm:space-y-0 sm:space-x-1 shadow-xl ">
                <span className="text-sky-700 pl-2 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="black"
                  >
                    <path
                      d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
                      stroke="rgba(0, 100, 188, 0.6)"
                      strokeWidth="1.2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
                      stroke="rgba(0, 100, 188, 0.6)"
                      strokeWidth="1.2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder={t("Entrez votre email")}
                  className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 px-2 py-1 text-sm sm:text-sm focus:outline-none w-full max-w-xs "
                />
                <button
                  type="submit"
                  className="bg-sky-600 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
                >
                  {t("Je m'abonne")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;