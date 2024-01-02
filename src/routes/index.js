import Home from "~/pages/Home";
import Following from "~/pages/following";
import Profile from "~/pages/profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import { HeaderOnly } from "~/components/Layout";
import routesConfig from "~/config/routes";
const publicRoutes = [
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

export { publicRoutes };
