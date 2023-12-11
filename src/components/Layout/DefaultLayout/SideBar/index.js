import Styles from "./Sidebar.modul.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);
function SideBar() {
  return (
    <aside className={cx("wrapper")}>
      <h2>sideBar </h2>
    </aside>
  );
}

export default SideBar;
