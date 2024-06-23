import React from "react";

type NavItemProps = {
  text: string;
};

export const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <div className="justify-center px-8 py-4 rounded-md max-md:px-5">
    {text}
  </div>
);

