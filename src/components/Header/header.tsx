import React, { useState } from "react";
import Log from "../../assets/Images/autres/logomades.png";
import Board from "../body/board/board";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import { ReactNode } from "react";
import Im2 from "../../assets/Images/padel/img4_padel.jpg";
import Im3 from "../../assets/Images/autres/imagetheo.jpg";
import Im4 from "../../assets/Images/padel/freecompress-IMG_3315.jpg";
import Im from "../../assets/Images/autres/IMG_3709.jpg";
import { FaBars } from "react-icons/fa";
import Home from "../../pages/Home/home";
import ContactUs from "../../pages/Contact/contact-us";
import AboutUs from "../../pages/AboutUs/aboutUs";
import Formation from "../../pages/Formations/formations";
import Dossier from "../../pages/Dossier";
import { useTranslation } from "react-i18next";
import Im5 from "../../assets/Images/Banner_board.jpg";

interface Image {
  src: string;
  alt: string;
}

const Header: React.FC = () => {
  const imag: Image[] = [
    { src: Im, alt: "Formation des Entraineurs de tennis" },
    { src: Im2, alt: "Formation des Entraineurs de tennis" },
    { src: Im3, alt: "Formation des Entraineurs de tennis" },
    { src: Im4, alt: "Formation des Entraineurs de tennis" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [afficher, setAfficher] = useState<ReactNode>(<Home />);
  const [enter, setEnter] = useState(true);
  const [val, setVal] = useState<number | null>(1);
  const [banner, setBanner] = useState<ReactNode>(<Board images={imag} />);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleval = (e: number | null) => {
    setEnter(true);
    setVal(e);

    if (e === 1) {
      setIsLoading(true);
      setBanner(<Board images={imag} />);
      setAfficher(<Home />);
      setIsLoading(false);
    } else if (e === 2) {
      setAfficher(<AboutUs />);
    } else if (e === 3) {
      setAfficher(<Formation />);
    } else if (e === 4) {
      setAfficher(<ContactUs />);
    } else if (e === 5) {
      setBanner(
        <div className="flex items-center justify-center">
          <Board images={[{ src: Im5, alt: "Formation des Entraineurs de tennis" },]} />
        </div>
      );
      setAfficher(<Dossier />);
    } else {
      setAfficher(<Home />);
    }
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { title: "Accueil", link: "/", id: 1 },
    { title: "À propos", link: "/A_propos", id: 2 },
    { title: "Nos formations", link: "/Formation", id: 3 },
  ];

  return (
    <>
      <header className="header-wrapper">
        <div className="sticky-navbar bg-white flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a href="/">
                  <img src={Log} alt="Logo" className="h-10 cursor-pointer" />
                </a>
              </div>

              <nav className="hidden md:flex items-center">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleval(item.id)}
                    className={`text-[12px] font-[Lex-regular] p-6 uppercase ${
                      val === item.id
                        ? "bg-sky-600 text-white"
                        : "bg-white text-slate-700"
                    }`}
                  >
                    {t(item.title)}
                  </button>
                ))}

                <button
                  className={`text-[12px] font-[Lex-regular] p-6 uppercase ${
                    val === 4 ? "bg-sky-600 text-white" : "bg-white text-slate-700"
                  }`}
                  onClick={() => handleval(4)}
                >
                  {t("Nous contactez")}
                </button>
                <button
                  className={`text-[12px] font-[Lex-regular] p-6 uppercase ${
                    val === 5 ? "bg-sky-600 text-white" : "bg-white text-slate-700"
                  }`}
                  onClick={() => handleval(5)}
                >
                  {t("Soumettre son dossier")}
                </button>
              </nav>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => changeLanguage("fr")}
                  className={`px-2 py-1 text-sm font-semibold  rounded-full h-[50px] w-[50px] ${
                    i18n.language === "fr" ? "text-white bg-sky-700" : "text-sky-700 bg-white"
                  }`}
                >
                  🇫🇷 FR
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-2 py-1 text-sm font-semibold rounded-full h-[50px] w-[50px] ${
                    i18n.language === "en" ? "text-white bg-sky-700" : "text-sky-700 bg-white"
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>

              <div className="md:hidden my-4 pe-2">
                <Dropdown open={isMenuOpen} onOpenChange={toggleMenu}>
                  <MenuButton
                    slots={{ root: IconButton }}
                    slotProps={{ root: { variant: "outlined", color: "neutral" } }}
                  >
                    <FaBars />
                  </MenuButton>
                  <Menu  className="w-full ">
                    <div className="font-[Lexend2]">
                    {menuItems.map((item) => (
                      <MenuItem key={item.title}>
                          <button
                            onClick={() => handleval(item.id)}
                            className={`text-gray-800 font-[Lexend2] ${
                              val === item.id
                                ? "text-sky-600 "
                                : " text-slate-700"
                            }`}
                          >
                            {t(item.title)}
                          </button>
                      </MenuItem>
                  
                ))}
                    <MenuItem>
                      <button className={`text-gray-800 font-[Lexend2] ${
                              val === 4
                                ? "text-sky-600 "
                                : " text-slate-700"
                            }`}
                            onClick={() => handleval(4)}
                            >
                        {t("Nous contactez")}
                      </button>
                    </MenuItem>
                    <MenuItem>
                    <button className={`text-gray-800 font-[Lexend2] ${
                              val === 5
                                ? "text-sky-600"
                                : " text-slate-700"
                            }`}
                            onClick={() => handleval(5)}
                            >
                        {t("Soumettre son dossier")}
                      </button>
                    </MenuItem>
                    </div>
                    
                  </Menu>
                </Dropdown>
              </div>
            </div>

            {isModalOpen && modalImage && (
              <div className="modal-backdrop">
                <div className="modal-content">
                  <button
                    onClick={closeModal}
                    className="modal-close-btn"
                    aria-label="Close Modal"
                  >
                    ×
                  </button>
                  <img src={modalImage} alt="Modal content" className="modal-image" />
                </div>
              </div>
            )}
          </div>
        </div>

        {enter && banner}
      </header>

      <body>
        {isLoading && (
          <div>
            <p>...loading</p>
          </div>
        )}
        <div>{enter && afficher}</div>
      </body>
    </>
  );
};

export default Header;