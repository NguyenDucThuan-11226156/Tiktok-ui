import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { useEffect, useState, useRef } from "react";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Styles from "./Search.module.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Debounce } from "~/Hook";
import { get } from "~/Utils/request";
import { search } from "~/apiServices/searchServices";

const cx = classNames.bind(Styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [showCheck, setShowCheck] = useState(false);
  const inputRef = useRef();
  const debound = Debounce(searchValue, 500);
  useEffect(() => {
    if (!debound.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setShowCheck(true);
      const result = await search(debound);
      setSearchResult(result);
      setShowCheck(false);
    };

    fetchApi();
  }, [debound]);

  const handleHidden = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) setSearchValue(searchValue);
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => {
              return (
                <AccountItem
                  key={result.id}
                  full_name={result.full_name}
                  nickname={result.nickname}
                  avatar={result.avatar}
                  tick={result.tick}
                />
              );
            })}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHidden}
    >
      <div className={cx("search")}>
        <input
          onFocus={() => setShowResult(true)}
          value={searchValue}
          ref={inputRef}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={handleChange}
        ></input>
        {!!searchValue && !showCheck && (
          <button
            className={cx("clear")}
            onClick={() => {
              setSearchValue("");
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
        )}

        {/* loading */}
        {showCheck && (
          <FontAwesomeIcon
            icon={faSpinner}
            className={cx("loading")}
          ></FontAwesomeIcon>
        )}

        <button
          className={cx("search-btn")}
          onMouseDown={(e) => e.preventDefault()}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
