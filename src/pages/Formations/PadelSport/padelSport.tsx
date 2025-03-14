import Newsletter from "../../../components/email/newsletter";
import Foot from "../../../components/footer/foot/foot";
import Header from "../../../components/Header/header";
import Editions from "../../../components/formation/edition/editions";
export default function PadelSport() {
  return (
    <>
      <Header/>
      <Editions 
        formation="Padel" 
        content="Le Padel est l’un des sports les plus dynamiques et en pleine croissance dans le monde. Notre formation en Padel est conçue pour offrir aux entraîneurs les outils nécessaires pour perfectionner leurs compétences techniques, tactiques et pédagogiques dans ce sport fascinant."/>
      
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
