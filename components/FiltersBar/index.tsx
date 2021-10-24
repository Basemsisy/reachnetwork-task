import React from "react";
import useWindowSize from "../../hooks/use-window-size";
import styles from "./FiltersBar.module.scss";

interface Props {
  filtersCount: number | undefined;
}

const FiltersBar = ({ filtersCount }: Props) => {
  const [width] = useWindowSize();
  const isMobileScreen = width <= 576;
  return (
    <div className={styles.FiltersBar + " container"}>
      {isMobileScreen ? (
        <div>
          <select name="" id="">
            <option>All</option>
          </select>
          <select name="" id="">
            <option>any time</option>
          </select>
        </div>
      ) : (
        <>
          <p>About {filtersCount} filtered results</p>
          <div className={styles.FiltersBar__Filter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="14" cy="6" r="2" />
              <line x1="4" y1="6" x2="12" y2="6" />
              <line x1="16" y1="6" x2="20" y2="6" />
              <circle cx="8" cy="12" r="2" />
              <line x1="4" y1="12" x2="6" y2="12" />
              <line x1="10" y1="12" x2="20" y2="12" />
              <circle cx="17" cy="18" r="2" />
              <line x1="4" y1="18" x2="15" y2="18" />
              <line x1="19" y1="18" x2="20" y2="18" />
            </svg>
            <p>Filter</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FiltersBar;
