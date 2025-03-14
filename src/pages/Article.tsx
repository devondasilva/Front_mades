import React from "react";
import Im2 from "../assets/Images/autres/new1.webp";
import Im3 from "../assets/Images/autres/new2.webp";
import Im4 from "../assets/Images/autres/new3.webp";
import Header from "../components/Header/header";
import Newsletter from "../components/email/newsletter";
import Foot from "../components/footer/foot/foot";
interface Article {
  category: string;
  title: string;
  imageUrl: string;
}
const articles: Article[] = [
  {
    category: "COMPANY",
    title: "We can blend colors multiple ways, the most common",
    imageUrl: Im2,
  },
  {
    category: "MARKETING EVENT",
    title: "How To Blow Through Capital At An Incredible Rate",
    imageUrl: Im3,
  },
  {
    category: "CUSTOMER SERVICES",
    title: "Design Studios That Everyone Should Know About?",
    imageUrl: Im4,
  },
  {
    category: "COMPANY",
    title: "We can blend colors multiple ways, the most common",
    imageUrl: Im2,
  },
  {
    category: "MARKETING EVENT",
    title: "How To Blow Through Capital At An Incredible Rate",
    imageUrl: Im3,
  },
  {
    category: "CUSTOMER SERVICES",
    title: "Design Studios That Everyone Should Know About?",
    imageUrl: Im4,
  },
];
// Fonction pour créer une URL dynamique à partir du titre
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Remplace les espaces et caractères spéciaux par "-"
    .replace(/^-|-$/g, ""); // Supprime les "-" en début et fin de chaîne
};
const Articles: React.FC = () => {
  return (
    <>
      <Header/>
      <section className="max-w-screen-xl mx-auto p-6 mb-8">
        {/* Grid of Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="space-y-2">
              <p className="text-sm text-gray-500 uppercase">
                • {article.category}
              </p>
              <a
                href={`/detail/${createSlug(article.title)}`}
                className="font-bold text-lg hover:text-blue-500 transition"
              >
                {article.title}
              </a>
              <div className="w-full h-40 bg-gray-200 rounded-lg flex justify-center items-center">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Newsletter />
      <Foot />
    </>
  );
};
export default Articles;