import React from "react";

export const Footer: React.FC = () => {


  return (
    <><footer className="flex gap-5 justify-between items-center px-20 py-4 text-lg font-medium leading-5 text-center whitespace-nowrap max-md:flex-wrap max-md:px-5">
      
      <div className=" bottom-0 w-full flex flex-row justify-center items-center bg-[#701A75]">
          <span className=" text-sm lg:text-base text-white font-light">Designed and developed by 
          <strong className="justify-center px-5 mt-2 text-xl tracking-tight leading-6 text-white">
        
        <a href={`https://www.linkedin.com/in/malahim-mavoungou-69869b125/`} target="_blank" rel="noopener noreferrer">
        MAVOUNGOU Malahim Kiamet Zenou
                  </a>
        </strong>.</span>
        </div>
      </footer>
      </>
   
  );
};
