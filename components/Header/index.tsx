import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
interface Props {}

const Header = (props: Props) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  return (
    <div className={styles.Header}>
      <div className="container">
        <div className={styles.Header__Wrapper}>
          <Image src="/logo.png" width={40} height={30} alt="logo" />
          <form className={styles.Header__Form}>
            <div className={styles.Header__Form__Input}>
              {isInputOpen ? (
                <input placeholder="search.." type="search" autoFocus />
              ) : (
                <p>search keyword</p>
              )}
            </div>
            <button
              className={styles.Header__Form__Button}
              type="button"
              onClick={() => setIsInputOpen(!isInputOpen)}
            >
              <Image src="/search.png" width={20} height={20} alt="logo" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
