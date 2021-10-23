import React, { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";
import useWindowSize from "../../hooks/use-window-size";

const Header = () => {
  const { query, ...router } = useRouter();
  const [isInputOpen, setIsInputOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query.query || "");
  const [width] = useWindowSize();
  const isMobileScreen = width <= 576;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInputOpen) {
      router.push({ pathname: "/search", query: { query: searchQuery } });
      if (isMobileScreen) setIsInputOpen(false);
    } else {
      setIsInputOpen(true);
    }
  };

  useEffect(() => {
    if (query?.query) {
      setSearchQuery(query.query);
    }
  }, [query.query]);

  return (
    <header className={styles.Header}>
      <div className="container">
        <div className={styles.Header__Wrapper}>
          {isMobileScreen ? (
            <Image src="/logo.png" width={40} height={30} alt="logo" />
          ) : (
            <div className={styles.Header__Logo}>
              <Image
                src="/desktop-logo.png"
                width={90}
                height={40}
                alt="logo"
              />
              <span>eg</span>
            </div>
          )}

          <form onSubmit={submitHandler} className={styles.Header__Form}>
            <div className={styles.Header__Form__Input}>
              {isInputOpen ? (
                <input
                  placeholder="search.."
                  type="search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                  autoFocus
                />
              ) : (
                <p>{searchQuery}</p>
              )}
            </div>
            <button
              className={styles.Header__Form__Button}
              type="submit"
              disabled={!searchQuery}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="#ffffff"
                fill="none"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
