import React from "react";

type ButtonProps = {
    text: string;
    variant: "primary" | "secondary";
    handle: (e: React.FormEvent) => void; 
  };
  
export const Button: React.FC<ButtonProps> = ({ text, variant , handle}) => (
    <button
    onClick={handle}
      className={`justify-center px-9 py-3.5 rounded-md max-md:px-5 ${
        variant === "primary" ? "text-white bg-fuchsia-900" : "bg-white text-zinc-700"
      }`}
    >
      {text}
    </button>
  );
