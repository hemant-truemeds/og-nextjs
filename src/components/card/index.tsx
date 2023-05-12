import React from "react";
import styles from "./card.module.scss";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ROOT_URL } from "@constants/Routes";
import { replaceImgUrl } from "@constants/functionsConstants";
import CustomImage from "@components/CutstomImage";

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

  const navigate_url = `medicine/${name
    .split(" ")
    .join("-")
    .toLowerCase()}${product_code.toLowerCase()}`;

  const handleRouteClick = () => {
    router.push(
      `/medicine/${name
        .split(" ")
        .join("-")
        .toLowerCase()}${product_code.toLowerCase()}`
    );
  };

  return (
    <div onClick={() => handleRouteClick()} className={styles.offerCardWrapper}>
      <Link as={`${ROOT_URL}${navigate_url}`} href={navigate_url}>
        <a onClick={(e) => e.preventDefault()}>
          <div className={styles.cardContainer}>
            <div className={styles.imgWrapper}>
              <CustomImage
                loading="lazy"
                src={
                  typeof img_url === "string"
                    ? img_url?.split(",")?.[0]
                    : img_url
                }
                width={100}
                height={100}
                objectFit="contain"
                alt={name}
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
        </a>
      </Link>
    </div>
  );
};

export default OfferCard;
