import classNames from "classnames/bind";
import Styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(Styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-2.jpg"
        alt="Hoaa"
      ></img>
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Duc Thuan</span>
          <FontAwesomeIcon
            className={cx("check")}
            icon={faCheckCircle}
          ></FontAwesomeIcon>
        </h4>
        <span className={cx("username")}>Thuannd31</span>
      </div>
    </div>
  );
}

export default AccountItem;
