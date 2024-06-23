import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  imageSrc: string | undefined;
  title: string | undefined;
  link: string | undefined;
  id: string
}

export const Card: React.FC<CardProps> = ({ imageSrc, title, link , id}) => {

  // const navigate = useNavigate();

  // const handleDetails = ( id: string) => {
  //   navigate(`/plugins//${id}`);
  // };

  return (
    <article className="flex flex-col pb-2 font-bold bg-white rounded-lg border border-gray-200 border-solid shadow-lg w-[24%]">
      <Link to={`/plugins/${id}`}>
      <img loading="lazy" src={imageSrc} alt={title} className="shrink-0 self-stretch aspect-[1.15] w-[100px]" 
      style={{ display: 'block', maxHeight: 'auto', maxWidth: '100%' }}
      />
      </Link>
      <div className="flex gap-2 px-2 py-1 mt-2 justify-between">
      <div className="justify-center text-1xl tracking-tight leading-10 text-right text-gray-500 whitespace-nowrap">
      {title}
        </div>
        {/* <div className="flex-1 text-sm leading-5 text-gray-500">
          <h2 className="text-sm font-black text-gray-500">{title}</h2>
          <p className="text-1xl leading-10 text-gray-500">{description}</p>
        </div> */}
        <div className="justify-center text-1xl tracking-tight leading-10 text-right text-teal-600 whitespace-nowrap">
        <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
          download
          </a>
        </div>
      </div>
    </article>
  );
};
