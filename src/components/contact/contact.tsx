import React from "react";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  return (

    <>
    <div className="bg-white text-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="lg:w-[65%] w-full lg:px-1 md:px-1 px-4 py-4">
          <p className="text-sky-600 mb-2 font-[Lexend2] text-3xl ">Contactez-nous</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Envoyer un message
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Remplissez le formulaire ci-dessous et notre équipe vous répondra
              dans les plus brefs délais.
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Nom <span className="text-sky-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Votre nom complet"
                  className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Email <span className="text-sky-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Votre message"
                  className="w-full px-4 py-3 rounded-md bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-sky-600 text-white font-bold rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-white text-lg" />
                Envoyer
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-[Lexend2] mb-2">Appelez-nous</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Contactez-nous par téléphone pour toute question ou assistance.
              </p>
              <div className="flex items-center mt-4 text-sky-600">
                <div className="p-3 bg-sky-600 rounded-full mr-3">
                <a href="https://wa.me/+594694246191"><FaPhoneAlt className="text-white" /></a>
                </div>
                +594 <span className="font-[Lexend2] ps-1"> 694 24 61 91</span>
              </div>
              <div className="flex items-center mt-2 text-sky-600">
                <div className="p-3 bg-sky-600 rounded-full mr-3">
                  <a href="https://wa.me/+15713078341"><FaWhatsapp className="text-white" /></a>
                </div>
                +1 <span className="font-[Lexend2] ps-1">(571) 307 8341</span> 
              </div>
            </div>

            <div>
              <h3 className="text-lg font-[Lexend2] mb-2">Visitez-nous</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Venez nous voir directement dans nos bureaux pour une assistance
                immédiate.
              </p>
              <div className="flex items-center mt-4 text-sky-600">
                <div className="p-3 bg-sky-600 rounded-full mr-3">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                PK10 Qtier SEYIVE BP 1234 COT Benin
              </div>
            </div>

            <div>
              <h3 className="text-lg font-[Lexend2] mb-2">Envoyez-nous un email</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Écrivez-nous pour toute question, nous vous répondrons
                rapidement.
              </p>
              <div className="flex items-center mt-4 text-sky-600">
                <div className="p-3 bg-sky-600 rounded-full mr-3">
                  <FaEnvelope className="text-white" />
                </div>
                projetmades@gmail.com
              </div>
            </div>

            <div>
              <h3 className="text-lg font-[Lexend2] mb-2">Suivez-nous</h3>
              <div className="flex space-x-4 mt-4">
                <div className="p-3 bg-sky-600 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300">
                  <a href="https://web.facebook.com/ProjetMADES/"><FaFacebook className="text-white text-xl" /></a>
                </div>
                <div className="p-3 bg-sky-600 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300">
                  <a href="https://www.instagram.com/projet_mades/"><FaInstagram className="text-white text-xl" /></a>
                </div>
                <div className="p-3 bg-sky-600 rounded-full cursor-pointer hover:bg-blue-600 transition duration-300">
                 <a href="https://www.linkedin.com/company/76478246/admin/dashboard/"><FaLinkedin className="text-white text-xl" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
