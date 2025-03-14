

import Newsletter from "../../../components/email/newsletter";
import Foot from "../../../components/footer/foot/foot";
import Editions from "../../../components/formation/edition/editions";
import Header from "../../../components/Header/header";



export default function BeachTennis() {

  
  return (
    <>
      <Header/>
      
      <Editions 
        formation="BEACH TENNIS" 
        content="Notre formation en Beach Tennis a rassemblé des entraîneurs passionnés venus perfectionner leurs compétences dans ce sport en plein essor. Sur le sable, les participants ont découvert des méthodes modernes d'entraînement, approfondi leur maîtrise technique et tactique, tout en partageant des moments enrichissants dans une ambiance conviviale et ensoleillée."
      />

      <div className="text-center mb-5 mt-4 sm:block hidden">
      <a href="/Formation">
        <button className="bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-800">
          Voir toutes nos formations
        </button>
        </a>
      </div>
      <Newsletter />
      <Foot />
    </>
  );
}
