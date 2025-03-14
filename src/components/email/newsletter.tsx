import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="bg-sky-600 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
        {/* Heading and Description */}
        <div className="lg:mr-4 text-center lg:text-left">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-[Lexend2]">
            Recevez nos nouveautés
          </h2>
          <p className="text-sm mt-2">
            Nos projets de formation offrent de nouvelles opportunités, allant
            sur le plan international.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-md w-full lg:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
          <span className="text-sky-700 pl-2 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            color="black"
          >
            <path
              d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
              stroke="rgba(0, 100, 188, 0.6)"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
              stroke="rgba(0, 100, 188, 0.6)"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>

          </span>
          <input
            type="email"
            placeholder="Entrez adresse email"
            className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 px-3 py-2 text-sm sm:text-base focus:outline-none w-full"
          />
          <button
            type="submit"
            className="bg-sky-600 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-blue-600 transition w-full sm:w-auto"
          >
            Je m'abonne
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
