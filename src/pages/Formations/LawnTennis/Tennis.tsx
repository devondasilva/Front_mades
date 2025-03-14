
// import box from "../../../assets/Images/ballsboxAsset 6.png";
import Newsletter from "../../../components/email/newsletter";
import Foot from "../../../components/footer/foot/foot"; 
import Editions from "../../../components/formation/edition/editions";
import Header from "../../../components/Header/header";

export default function Tennis() {
  return (
    <>
      <Header/>
      
      <Editions 
        formation="TENNIS" 
        content="Notre formation en Tennis a été une véritable opportunité pour les entraîneurs de perfectionner leurs techniques et stratégies dans ce sport emblématique. Pendant plusieurs jours, les participants ont exploré des approches modernes d’entraînement, renforcé leurs connaissances tactiques et échangé avec d’autres passionnés. Une expérience enrichissante qui élève le niveau de performance et d’expertise."
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
