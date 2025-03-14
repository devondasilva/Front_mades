
import React from "react";
import { Link } from "react-router-dom";
import Im2 from "../../assets/Images/autres/new1.webp";
import Im3 from "../../assets/Images/autres/new2.webp";
import Im4 from "../../assets/Images/autres/new3.webp";


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
];

const LatestNews: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1200px]">
    <section className="max-w-screen-2xl mx-auto p-6 mb-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-[Lexend2] text-[#000000]">Dernières informations</h2>
        <Link
          to="/Article"
          className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800"
        >
          <span>Voir plus</span>
          <span>→</span>
        </Link>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="space-y-2">
            <p className="text-sm text-gray-500 uppercase font-[Lexend2]">
              • {article.category}
            </p>
            <h3 className="font-bold text-lg">{article.title}</h3>
            <div className="w-full h-40 bg-gray-200 rounded-lg flex justify-center items-center ">
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
    </div>
    </div>
  );
};

export default LatestNews;