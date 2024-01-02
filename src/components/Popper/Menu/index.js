import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import classNames from "classnames/bind";
import Styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(Styles);

function Menu({ children, items, hideOnClick = false, onChange }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        ></MenuItem>
      );
    });
  };
  return (
    <Tippy
      hideOnClick={hideOnClick}
      delay={[0, 800]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("content")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() =>
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }
              ></Header>
            )}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => {
          return prev.slice(0, 1);
        });
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
