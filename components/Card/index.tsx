import React from "react";
import styles from "./Card.module.scss";

interface Props {}

export const Card = (props: Props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__Image__Holder}>
        <img
          width="360"
          className={styles.Image}
          src="https://via.placeholder.com/150C/O https://placeholder.com/"
          alt=""
        />
      </div>
      <div className={styles.Card__Data}>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
          dolores.
        </h3>
        <div className={styles.Card__Meta}>
          <span>basem *</span>
          <span>8.8k views</span>
          <span>2 years ago</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          ullam, ex modi suscipit amet repellat doloremque quod pariatur
          explicabo fugiat.
        </p>
      </div>
    </div>
  );
};
