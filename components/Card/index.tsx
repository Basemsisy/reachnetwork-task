import React from "react";
import useWindowSize from "../../hooks/use-window-size";
import styles from "./Card.module.scss";

interface Props {
  data: any;
}

export const Card = ({ data }: Props) => {
  const [width] = useWindowSize();
  const isMobileScreen = width <= 576 ? "default" : "high";
  const { title, description, channelTitle, publishedAt, thumbnails } = data;
  return (
    <div className={styles.Card}>
      <div className={styles.Card__Image__Holder}>
        <img
          width="360"
          className={styles.Image}
          src={thumbnails[isMobileScreen]?.url}
          alt=""
        />
      </div>
      <div className={styles.Card__Data}>
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        <div className={styles.Card__Meta}>
          <span>{channelTitle}</span>
          <span>8.8k views</span>
          <span>{publishedAt}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
