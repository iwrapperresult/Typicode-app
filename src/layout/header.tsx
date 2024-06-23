import React, { useState } from "react";
import { NavItem } from "../plugin/components/navbar";
import { Button } from "../plugin/components/button";
import PluginForm from "../plugin/form";
import Modal from "../plugin/components/modal";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
  const navItems = ["ReactJs project specifications"];

  const handleAddPlugin = () => {
    setShowForm(true);
  };
  const buttons = [
    { text: "Add plugin", variant: "primary" as const , handle: handleAddPlugin},
  ];

  

  return (
    <><header className="flex gap-5 justify-between items-center px-20 py-4 text-lg font-medium leading-5 text-center whitespace-nowrap max-md:flex-wrap max-md:px-5">
      <Link to={`/`}>
          <img
              loading="lazy"
              src="https://media.licdn.com/dms/image/C4E0BAQHkNyEKuMcz6g/company-logo_200_200/0/1631309413277?e=1727308800&v=beta&t=WCxLaJ-FehwoUPFPFnBzol_11DPzZR4byisIae-QL3o"
              alt=""
              className="shrink-0 self-stretch aspect-[1.15] w-[100px]" />
              </Link>
          <nav className="flex gap-5 self-stretch pl-20 my-auto text-zinc-700 max-md:flex-wrap">
              {navItems.map((item, index) => (
                  <NavItem key={index} text={item} />
              ))}
          </nav>
          <div className="flex gap-5 justify-between self-stretch my-auto">
              {buttons.map((button, index) => (
                  <Button key={index} text={button.text} variant={button.variant} handle={button.handle}  />
              ))}
          </div>
      </header>
      <Modal show={showForm} onClose={() => setShowForm(false)}>
        <PluginForm title="To Add one plugin" onClose={() => setShowForm(false)} />
      </Modal>
      </>
   
  );
};
