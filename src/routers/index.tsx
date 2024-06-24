import React from "react";
import { Route, Routes } from "react-router-dom";
import { navigationPaths } from "./pages";
import { AdminLayout } from "../layout";
import Login from "../user";
import Register from "../user/register";

const PluginRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        {navigationPaths.map((navigation: any) => (
          <Route
            key={navigation.path}
            path={navigation.path}
            element={<AdminLayout>{navigation.element}</AdminLayout>}
          />
        ))}

        <Route path="/login/*" element={<Login />} />
        <Route path="/sign-up/*" element={<Register />} />
      </Routes>
    </>
  );
};

export default PluginRoutes;
