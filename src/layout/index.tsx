import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const AdminLayout = ({ children }: any) => {
  const navigate = useNavigate();
  
  

  return (
    <div className="w-screen min-h-screen h-screen flex flex-row justify-center font-apple-system">
      <div className="relative w-full max-w-[90%] h-full max-h-[90%] lg:max-w-[1440px] lg:max-h-[1024px] flex flex-row lg:flex-row px-3 py-2 ">
          <div className="flex flex-col w-full">
          <Header />
          <main className="container flex flex-col lg:flex-row mx-auto h-full w-full pt-8">
            <div className="w-full  bg-white p-3 rounded-b-md">
              {children}
            </div>
          </main>
          
          <Footer/>
        </div>

      </div>
      
    </div>
  );
};
