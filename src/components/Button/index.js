import classNames from "classnames/bind";
import Styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const cx = classNames.bind(Styles);

function Button({
  to,
  href,
  onClick,
  children,
  primary = false,
  outline = false,
  small = false,
  large = false,
  text = false,
  disabled = false,
  rounded = false,
  rightIcon,
  leftIcon,
  className = false,
  ...remaining
}) {
  let Comp = "button"; // Updated to a string representing the HTML element
  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  const props = {
    onClick,
    ...remaining,
  };
  useEffect(() => {
    console.log(onClick);
  });
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
