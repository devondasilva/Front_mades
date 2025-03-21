import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const Formation: React.FC<CardProps> = ({ imageUrl, title, description, link }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  mx-auto">
      <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
        <img className="rounded-t-lg w-full" src={imageUrl} alt={title} />
      </a>
      <div className="p-5">
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 font-[Lexend2]">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          aria-label={`Read more about ${title}`}
        >
          Voir plus
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Formation;