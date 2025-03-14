

interface EditionProps {
  image: string;
  title: string;
  adres?: string; // Remplace `any` par React.ReactNode
}

const Edition: React.FC<EditionProps> = ({ image, title, adres}) => {
  // Afficher une alerte au montage du composant
 

  return (
    <>
      

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="text-center bg-sky-600 py-3 shadow-xl">
          <h2 className="font-bold text-white text-xl">{title}</h2>
          <a href={adres}><button
            className="mt-4 bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800"
            aria-label={`Voir plus d'informations sur ${adres}`}
          >
            Voir Plus
          </button></a>
        </div>
      </div>
    </>
  );
};

export default Edition;
