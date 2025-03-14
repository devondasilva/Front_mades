import { useState } from "react";
import Partners from "../partners/partners";
import Logmades from "../../../assets/Images/autres/logomades.png";
import "./foot.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface LienProps {
  titre: string;
  adres: string;
}

interface NavigationProps {
  items: LienProps[];
  type: string;
}

const Navigation: React.FC<NavigationProps> = ({ items, type }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
 AOS.init();
  return (
    <div className="flex flex-col items-start space-y-2 ps-6">
      <p className="font-bold text-xl text-white mb-4" style={{ fontFamily: "Lexend2" }}>
        {type}
      </p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <a
              href={item.adres}
              className="text-white text-sm no-underline "
              aria-label={item.titre}
            >
              {item.titre}
            </a>
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300 ${
                hoverIndex === index ? "w-1/3" : "w-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Foot() {
  const items: LienProps[] = [
    { titre: "ACCEUIL", adres: "/" },
    { titre: "A PROPOS DE NOUS", adres: "/A_propos" },
    { titre: "NOS FORMATIONS", adres: "/Formation" },
    { titre: "NOUS CONTACTEZ", adres: "/Nos_contacts" },
  ];

  const socials: LienProps[] = [
    { titre: "FACEBOOK", adres: "https://web.facebook.com/ProjetMADES" },
    { titre: "INSTAGRAM", adres: "https://www.instagram.com/projet_mades" },
    { titre: "LINKEDIN", adres: "https://www.linkedin.com/company/projet-mades" },
    { titre: "WHATSAPP", adres: "https://wa.me/+15713078341" },
  ];

  return (
    <>
      <div className="my-10 max-w-[1200px] mx-auto">
        <p
          className="text-center text-sky-700 font-semibold mb-4"
          style={{ fontFamily: "Lexend2", fontSize: "35px" }}
        >
          NOS PARTENAIRES
        </p>
        <Partners />
      </div>
      <div className="bg-[#3B94D0] py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center uppercase">
            {/* Logo */}
            <div className="bg-white flex justify-center items-center h-full ">
              <img src={Logmades} alt="logo mades" className="max-h-12 w-auto" data-aos="fade-up"/>
            </div>
            {/* Navigation */}
            <Navigation items={items} type="Navigation" />
            {/* Socials */}
            <Navigation items={socials} type="Socials" />
          </div>
          {/* Footer Text */}
          <div className="flex justify-center mt-10 text-white">
            <p>Copyright © MADES</p>
          </div>
        </div>
      </div>
    </>
  );
}
