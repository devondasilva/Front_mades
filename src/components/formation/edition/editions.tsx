import Im from "../../../assets/Images/beachtennis/freecompress-IMG_4508 (1).jpg";
import Im2 from "../../../assets/Images/tennis/freecompress-IMG_3536.jpg";
import Im3 from "../../../assets/Images/padel/freecompress-IMG_3792.jpg";
import Edition from "./edition";


interface EditionProps{
  formation: string,
  content: string
}

const Editions: React.FC <EditionProps> = ({formation , content}) => {
  const contenu = [
    {
      im: Im,
      titre: "EDITION 2022",
      adres: "/Galerie",
    },
    {
      im: Im2,
      titre: "EDITION 2023",
      adres: "/Galerie",
    },
    {
      im: Im3,
      titre: "EDITION 2024",
      adres: "/Galerie",
    },
  ];

  return (
    <div className="flex justify-center py-6 mx-4 ">
      
      <div className="w-full max-w-[1200px] py-4">
        <div>
          <h1
            className="text-sky-700 text-center m-4 text-4xl font-semibold"
            style={{ fontFamily: "Lexend2" }}
          >
            {formation}
          </h1>
          <p className="text-sm text-[#000000]">
            {content}
          </p>
          <div className="mt-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contenu.map((item, index) => (
              <Edition
                key={index}
                image={item.im}
                title={item.titre}
                adres={item.adres}
              />
                
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editions;
