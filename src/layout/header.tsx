import React, { useEffect, useState } from "react";
import { NavItem } from "../components/navbar";
import { Button } from "../components/button";
import PluginForm from "../plugin/form";
import Modal from "../components/modal";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../common/store";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, selectUsers } from "../user/common/slice";
import { fetchUsers } from "../user/common/action";

export const Header: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);
  const navigate = useNavigate();
  const navItems = ["ReactJs project specifications"];
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector(selectUsers);
  const loggedInUser = useSelector(selectLoggedInUser);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleAddPlugin = () => {
    setShowAdd(true);
  };

  const handleRegister = () => {
    navigate("/sign-up");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <header className="flex gap-5 justify-between items-center px-20 py-4 text-lg font-medium leading-5 text-center whitespace-nowrap max-md:flex-wrap max-md:px-5">
        <Link to={`/`}>
          <img
            loading="lazy"
            src="https://media.licdn.com/dms/image/C4E0BAQHkNyEKuMcz6g/company-logo_200_200/0/1631309413277?e=1727308800&v=beta&t=WCxLaJ-FehwoUPFPFnBzol_11DPzZR4byisIae-QL3o"
            alt=""
            className="shrink-0 self-stretch aspect-[1.15] w-[100px]"
          />
        </Link>
        <nav className="flex gap-5 self-stretch pl-20 my-auto text-zinc-700 max-md:flex-wrap">
          {navItems.map((item, index) => (
            <NavItem key={index} text={item} />
          ))}
        </nav>
        <div className="flex gap-5 justify-between self-stretch my-auto">
          {loggedInUser || users?.find((u: any) => u.email === user.email) ? (
            <Button
              text="Add plugin"
              variant="primary"
              handle={handleAddPlugin}
            />
          ) : (
            <>
              <Button
                text="Register"
                variant="secondary"
                handle={handleRegister}
              />
              <Button text="Login" variant="primary" handle={handleLogin} />
            </>
          )}
        </div>
      </header>
      <Modal show={showAdd} onClose={() => setShowAdd(false)}>
        <PluginForm
          title="To Add one plugin"
          onClose={() => setShowAdd(false)}
        />
      </Modal>
    </>
  );
};
