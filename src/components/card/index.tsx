import React from "react";
import styles from "./card.module.scss";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import Picture from "@components/picture";

interface IProps {
  img_url: StaticImageData | string;
  name: string;
  price: number;
  mrp: number;
  discount: number;
  product_code: string;
}

const OfferCard = (props: IProps) => {
  const { img_url, name = "", price, mrp, discount, product_code } = props;
  const router = useRouter();

  const handleRouteClick = () => {
    router.push(`/medicine/${name.split(" ").join("-")}${product_code}`);
  };

  return (
    <div onClick={() => handleRouteClick()} className={styles.offerCardWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.imgWrapper}>
          <Picture
            loading="lazy"
            src={
              typeof img_url === "string" ? img_url?.split(",")?.[0] : img_url
            }
            width={100}
            height={100}
            objectFit="contain"
            alt=""
          />
        </div>
        <h2 className={styles.productTitle}>{name}</h2>
        <hr />
        <div className={styles.infoWrapper}>
          <div className={styles.infoDisplay}>
            <div className={styles.mrpWrapper}>
              <span className={styles.mrpTitle}>MRP</span>
              <del>₹{mrp}</del>
            </div>
            <div className={styles.sellingPrice}>
              <span className={styles.sellingSymbol}>₹</span>
              <span>{price}</span>
            </div>
          </div>
          <div className={styles.infoCta}>
            <button className={styles.addBtn}>Add</button>
          </div>
        </div>
      </div>
      <div className={styles.offerContainer}>{discount}% OFF</div>
    </div>
  );
};

export default OfferCard;
