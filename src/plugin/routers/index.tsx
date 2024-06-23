import React from "react";
import {  Route, Routes } from "react-router-dom";
import { navigationPaths } from "./pages";
import { AdminLayout } from "../../layout";



const PluginRoutes: React.FC = () => {
  return (
    <>
     <AdminLayout> 
        <Routes>
          {navigationPaths.map((navigation: any) => (
            <Route
              key={navigation.path}
              path={navigation.path + "/*"}
              element={navigation.element}
            />
          ))}
        </Routes>
         </AdminLayout> 
    </>
  );
};

export default PluginRoutes;
