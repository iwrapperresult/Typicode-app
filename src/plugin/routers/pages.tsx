import path from "path";
import { PluginDetails } from "../../details";
import { Login } from "../../login";
import { Paths } from "./paths";
import PluginList from "..";

export const navigationPaths = [
  {
    path: Paths.Home,
    element: <PluginList />
  },
  {
    path: Paths.Login,
    element: <Login />,
  },
  {
    path: Paths.PluginDetails,
    element: <PluginDetails/>,
  }, 
];

