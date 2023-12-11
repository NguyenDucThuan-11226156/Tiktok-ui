import Header from "~/components/Layout/components/Header";
import SideBar from "./SideBar";
import Styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
function DefaultLayout({ children }) {
  return (
    <div>
      <div className={cx("wrapper")}>
        <Header></Header>
        <div className={cx("container")}>
          <SideBar></SideBar>
          <div className={cx("content")}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
