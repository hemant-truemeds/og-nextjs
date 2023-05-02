import React from "react";
import styles from "./articleCard.module.scss";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  wpArticles: any;
}

const ArticleCards = (props: IProps) => {
  const { wpArticles } = props;
  return (
    <div className={styles.articleCardsWrapper}>
      <h2 className={styles.titleSection}>Health Articles</h2>
      <div className={styles.cardWrapper}>
        {wpArticles?.map((item: any) => {
          return (
            <div key={item?.id} className={styles.cardContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  objectFit="contain"
                  loading="lazy"
                  width={600}
                  height={260}
                  src={item?.yoast_head_json?.og_image?.[0]?.url}
                  alt=""
                />
                {/* <img src={item?.yoast_head_json?.og_image?.[0]?.url} alt="" /> */}
              </div>
              <div className={styles.description}>
                <Link href={"/"}>
                  <a className={styles.imageTitle}>
                    {item?.title?.rendered}
                    {/* All about World Liver Day 2023: Significance, Diseases, and
                  Tips */}
                  </a>
                </Link>
                <p className={styles.readMore}>Read more</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleCards;