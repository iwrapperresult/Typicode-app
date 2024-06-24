import { Paths } from "./paths";
import PluginList from "../plugin";
import { PluginDetails } from "../details";

export const navigationPaths = [
  {
    path: Paths.Home,
    element: <PluginList />,
  },
  {
    path: Paths.PluginDetails,
    element: <PluginDetails />,
  },
];
