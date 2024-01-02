import classNames from "classnames/bind";
import Styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(Styles);
function AccountItem({ full_name, nickname, avatar, tick }) {
  return (
    <Link to={`/user/@${nickname}`} className={cx("wrapper")}>
      <img className={cx("avatar")} src={avatar} alt="Hoaa"></img>
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{full_name}</span>
          {tick && (
            <FontAwesomeIcon
              className={cx("check")}
              icon={faCheckCircle}
            ></FontAwesomeIcon>
          )}
        </h4>
        <span className={cx("username")}>{nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
