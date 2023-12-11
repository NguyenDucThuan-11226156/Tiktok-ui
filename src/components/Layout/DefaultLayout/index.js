import Header from "~/components/Layout/components/Header";
import SideBar from "./SideBar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <SideBar></SideBar>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
