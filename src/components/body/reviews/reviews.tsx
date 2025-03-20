import React from "react";
import Roma from "../../../assets/Images/entraineurs/roma.png";
import Ren from "../../../assets/Images/entraineurs/renold.png";
import Her from "../../../assets/Images/entraineurs/herve.png";
import Bon from "../../../assets/Images/entraineurs/bona.png";
import Mag from "../../../assets/Images/entraineurs/magloire.png";
import Rom from "../../../assets/Images/entraineurs/romu.png";
import Review from "./review";
import { useTranslation } from "react-i18next"; // Importez useTranslation

const Reviews: React.FC = () => {
  const { t } = useTranslation(); // Utilisez useTranslation
  const conte = [
    {
      Nom: "Romaric GANDONOU",
      imgn: Roma,
      proflink: "https://web.facebook.com/profile.php?id=100090531856160",
    },
    {
      Nom: "Renold SAIZONOU",
      imgn: Ren,
      proflink: "https://web.facebook.com/profile.php?id=100087171542529",
    },
    {
      Nom: "Bonaventure DANHOUAN",
      imgn: Bon,
      proflink: "https://web.facebook.com/profile.php?id=61556336846023",
    },
    {
      Nom: "Hervé TOGBE",
      imgn: Her,
      proflink: "https://web.facebook.com/herve.togbe.75",
    },
    {
      Nom: "Magloire YAKPA",
      imgn: Mag,
      proflink:
        "https://web.facebook.com/photo/?fbid=2144666778977772&set=a.796375957140201",
    },
    {
      Nom: "Romuald HOUNGBO",
      imgn: Rom,
      proflink: "https://web.facebook.com/romuald.houngbo.7",
    },
  ];

  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="w-full max-w-[1200px]">
        <div>
          <p
            className=" text-center text-lg text-black my-1 uppercase font-bold"
            style={{
              fontFamily: "Lexend2",
              fontSize: "25px",
              padding: "20px",
            }}
          >
            {t("NOS COACHS À L'ÉTRANGER")}
          </p>
          <div className="ligne mb-3 text-sm text-center text-gray-600 px-4">
            {t(
              `Chez MADES, nous sommes fiers de collaborer avec des coaches talentueux et expérimentés établis aux quatre coins du globe. Grâce à leur expertise et à leur passion, ils apportent un savoir-faire unique et adapté aux besoins locaux, tout en incarnant nos valeurs d'excellence et de professionnalisme.`
            )}
          </div>

          {/* Grille responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 px-4">
            {conte.map((item, index) => (
              <Review
                key={index}
                Nom={item.Nom}
                imgn={item.imgn}
                proflink={item.proflink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;