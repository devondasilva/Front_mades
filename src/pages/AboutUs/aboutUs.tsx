import React from "react";
import Section from "../../components/Section";
import { Feather } from "react-feather";
import Im2 from "../../assets/Images/autres/freecompress-img4_tennis.jpg";
import Im3 from "../../assets/Images/padel/freecompress-IMG_3333.jpg";
import Im4 from "../../assets/Images/padel/freecompress-IMG_3792.jpg";
import Newsletter from "../../components/email/newsletter";
import LatestNews from "../../components/news/article";
import Foot from "../../components/footer/foot/foot";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs: React.FC = () => {
  AOS.init();
  return (
    <>


      <main >
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px]">

          <div className="container mx-auto px-4 py-8">
            <Section
              title="Nous sommes une structure qualifiée offrant des services de pointes pour la nouvelle génération"
              text=""
              imageSrc={Im2}
              imageAlt="Description de l'image"
              imagePosition="left"
              aosStyle="fade-in"
              textcolor="text-[#000000]"
              additionnalContent={
                <div className="flex flex-col ">
                  <div className="grid grid-cols-2 mb-4">
                    {/* Éléments en haut */}
                    <div className="flex">
                      <Feather className="mr-2 text-[#0284c7]" />{" "}
                      {/* Icône à gauche */}
                      <h2 className="text-lg font-bold font-[Lexend2] text-[#000000]">Formation Accélérée</h2>
                    </div>
                    <div className="flex">
                      <Feather className="mr-2 text-[#0284c7]" />{" "}
                      {/* Icône à gauche */}
                      <h2 className="text-lg font-[Lexend2] text-[#000000]">
                        Organisation Événement Sportif
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    {/* Éléments en bas */}
                    <div className="flex">
                      <Feather className="mr-2 text-[#0284c7]" />{" "}
                      {/* Icône à gauche */}
                      <h2 className="text-lg font-[Lexend2] text-[#000000]">Remise à Niveau</h2>
                    </div>
                    <div className="flex">
                      <Feather className="mr-2 text-[#0284c7] " />{" "}
                      {/* Icône à gauche */}
                      <h2 className="text-lg font-[Lexend2] text-[#000000]">Liaison avec les Clubs</h2>
                    </div>
                  </div>
                </div>
              }
            />
            </div>
            </div>
          </div>


          <div className=" flex justify-center bg-slate-50" >
          <div className="w-full max-w-[1200px]">
          <div className="container mx-auto px-4 py-8">
            <Section
              subtitle="QUI NOUS SOMMES"
              subtitleColor="#0A5473"
              imageSrc={Im3}
              imageAlt="Description de l'image"
              imagePosition="right"
              aosStyle="fade-up-right"
              textcolor="#000000"
              // Ajout de padding et de couleur de fond
              text="Créé il y a plus de treize (13) ans, MADES-BUS, est une organisation
                non gouvernementale dont la vocation première est de fédérer les
                spécialistes et les experts de l’univers sportif, en particulier
                celui du tennis, dans le but de renforcer leurs capacités techniques
                et managériales, aux côtés des institutions nationales,
                continentale internationales. Notre vision est de faire du métier
                d'entraîneur un véritable maillon de création d’emploi au service du
                développement du sport africain et de l’éducation de la jeunesse.
                Dans cet objectif, nous avons œuvré, pendant plus d’une décennie, à
                l’insertion, au renforcement de capacités et au suivi de nombreux
                joueurs et entraÏneurs dans leurs carrières respectives. Aujourd’hui
                plus que jamais les enjeux liés, à la professionnalisation du sport, à
                l’emploi des jeunes et à la lutte contre l’immigration clandestine,
                nous amènent à nous mobiliser davantage autour de notre vision
                première : « faire du métier d'entraîneur un véritable maillon de
                création d’em ploi au service du développement du sport africain et
                de l’éducation de la jeunesse africaine »."
            >
            </Section>
            </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px]">
      <div className="container mx-auto px-4 py-8">
        <Section
          subtitle="NOTRE PROJET"
          subtitleColor="#0A5473"
          imageSrc={Im4}
          imageAlt="Description de l'image"
          imagePosition="left"
          aosStyle="fade-up-left"
          textcolor="#000000"
          text="Le projet actuel est un séminaire de formation des entraîneurs de
            l’espace francophone africain. Il a été initié dans le but de renforcer
            les capacités techniques et managériales des différents entraîneurs
            de sport, par une formation excellente de qualité avec pour
            finalité leur insertion. Il aura lieu du 12 au 18 Août 2024 à Cotonou
            au Bénin. Ledit séminaire de formation sera animé par des experts et
            des professionnels du domaine tennistique, qui partageront avec les
            apprenants leurs connaissances et savoir-faire. Au cours de cette
            formation, non seulement les capacités seront renforcées,
            l’appropriation de l’enseignement de nouvelles disciplines
            émergentes seront aussi enseignées aux participants à savoir : - le
            Beach Tennis , - le Padel - le Fitness cross fit Nous soulignons aussi
            que des formations linguistiques telles que l’anglais et l’arabe
            seront ajoutées à celles déjà annoncées, vue les exigences de
            certains clubs internationaux (au canada, en Corée du sud et
            certains pays du Golf)."
        >
        </Section>
        </div>
        </div>
      </div>
      <div className="flex justify-center bg-slate-50">
        <div className="w-full max-w-[1200px]">
            <div className="container mx-auto px-4 py-8">
            <Section
              subtitle="EXPERIENCES" 
              subtitleColor="#0A5473"
              imageSrc={Im2}
              imageAlt="Description de l'image"
              imagePosition="right"
              aosStyle="fade-up-right"
              textcolor="#000000"
              text="En Août 2022, au Bénin, lors de la première édition, les projets
                pilotes de « Beach Tennis » et de « secourisme » ont été implémentés
                et ont connu la participation de 65 entraîneurs venant de plusieurs
                pays de la sous-région. Cela a été un véritable succès non seulement
                pour le corps sportif africain mais également pour les entraîneurs,
                y compris le gouvernement du Bénin, à travers les nombreuses
                sollicitations de ces derniers, qui nous ont encouragés à organiser
                le plus souvent de pareils évènements qui concordent parfaitement
                avec leurs besoins. Fort de cette première réussite, MADES-BUS a
                étendu son influence lors de la deuxième édition, qui s'est déroulée
                en Côte d'Ivoire en 2023. Cette fois-ci, notre séminaire de
                formation a élargi son public, accueillant non seulement des
                entraîneurs mais également des pratiquants et des amateurs de
                tennis. Aussi, sous la tutelle d'experts et de professionnels du
                tennis, le séminaire a approfondi les connaissances des
                participants, incluant des disciplines émergentes telles que le
                Beach Tennis, le Padel, et la Musculation."
            >
            </Section>
            </div>
            </div>
        </div>
      
      </main>

      <LatestNews />
      <Newsletter />
      <Foot />
    </>
  );
};

export default AboutUs;