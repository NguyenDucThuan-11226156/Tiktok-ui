import Home from "~/pages/Home";
import Following from "~/pages/following";
import Profile from "~/pages/profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import { HeaderOnly } from "~/components/Layout";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "following", component: Following },
  { path: "profile", component: Profile },
  { path: "upload", component: Upload, layout: HeaderOnly },
  { path: "search", component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
