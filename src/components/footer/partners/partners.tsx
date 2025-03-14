import { useState } from 'react';
import Partner from "./partner";
import Bus from '../../../assets/Images/LOGO/Bus.png';
import DEJEPS from '../../../assets/Images/LOGO/DEJEPS.jpg';
import visit from '../../../assets/Images/LOGO/visitbenin.png';
import cot from '../../../assets/Images/LOGO/cotonou.jpg';
import hdn from '../../../assets/Images/LOGO/HDN.jpg';
import int from '../../../assets/Images/LOGO/Interrecruit.jpg';
import moov from '../../../assets/Images/LOGO/MOOV.png';
import ap from '../../../assets/Images/LOGO/APRAC.png';
import oki from '../../../assets/Images/LOGO/OKINAWA.jpg';
import das from '../../../assets/Images/LOGO/das.png';

const Partners: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const ConteIm = [
    { lienIm: Bus },
    { lienIm: DEJEPS },
    { lienIm: visit },
    { lienIm: cot },
    { lienIm: oki },
    { lienIm: hdn },
    { lienIm: int },
    { lienIm: moov },
    { lienIm: ap },
    { lienIm: das },
    { lienIm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpd2CbvVSZx2CZAVi-nh6Qczsc7ue3eJsoQ&s" },
    { lienIm: "https://upload.wikimedia.org/wikipedia/en/5/50/CAF-Confederation-Cup.png" }
  ];

  const displayedPartners = showAll ? ConteIm : ConteIm.slice(0, 6); // Affiche les 6 premiers partenaires ou tous si `showAll` est vrai

  return (
    <div className="flex justify-center py-4 ">
      <div className="w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayedPartners.map((item, index) => (
            <Partner key={index} lienIm={item.lienIm} />
          ))}
        </div>
        {/* Afficher "Afficher plus" seulement sur les petits écrans */}
        {!showAll && (
          <div className="text-center mt-4 sm:block hidden">
            <button
              onClick={() => setShowAll(true)}
              className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800">
              Afficher plus
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;
