import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  imageSrc: string | undefined;
  title: string | undefined;
  link: string | undefined;
  id: string
}

export const Card: React.FC<CardProps> = ({ imageSrc, title, link , id}) => {

  return (
    <article className="flex flex-col pb-2 font-bold bg-white rounded-lg border border-gray-200 border-solid shadow-lg w-[24%]">
      <Link to={`/plugins/${id}`}>
      <img loading="lazy" src={imageSrc} alt={title} className="shrink-0 self-stretch aspect-[1.15] w-[100px]" 
      style={{ display: 'block', maxHeight: 'auto', maxWidth: '100%' }}
      />
      </Link>
      <div className="flex gap-2 px-2 py-1 mt-2 justify-between">
      <div className="w-48 justify-center text-start text-1xl tracking-tight leading-10 text-right text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {title}
      </div>

        <div className="justify-center text-1xl tracking-tight leading-10 text-right text-teal-600 whitespace-nowrap">
        <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
          download
          </a>
        </div>
      </div>
    </article>
  );
};
