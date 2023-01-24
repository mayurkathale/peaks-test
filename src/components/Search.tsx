import React, { useState, useRef } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import searchIcon from "../assets/images/search-icon@2x.svg";
import { ROUTES } from "../constants";
import styles from "./Search.module.scss";
import { CSSTransition } from "react-transition-group";
export const Search = () => {
  const [searching, setSearching] = useState<boolean>(false);
  const searchref = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const animateRef = useRef(null);

  const handleSearchKeyDown = React.useCallback((
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      if (searchref.current?.value.trim().length) {
        navigate( generatePath(ROUTES.search, {term: searchref.current?.value}))
      }
    }
  }, [searchref, navigate]);

  const animateClasses = {
    enter: styles.animateEnter,
    enterActive: styles.animateEnterActive,
    enterDone: styles.animateEnterDone,
    exit: styles.animateExit,
    exitActive: styles.MyClassExit,
    exitDone: styles.MyClassExitActive
  };

  return (
    <div>
      {!searching && (
        <div className={styles.searchContainer}>
          <img
            src={searchIcon}
            alt="search icon"
            className={styles.searchIcon}
            onClick={() => setSearching(!searching)}
          />
        </div>
      )}
        <CSSTransition
          in={searching}
          timeout={1000}
          classNames={animateClasses}
          nodeRef={animateRef}
          unmountOnExit
          appear
        >
          <div className={styles.searchBox} ref={animateRef}>
            <input
              type="text"
              placeholder="Search all news"
              ref={searchref}
              onKeyDown={handleSearchKeyDown}
            />
            <img
              src={searchIcon}
              alt="search icon"
              className={styles.searchIcon}
            />
          </div>
        </CSSTransition>
    </div>
  );
};
