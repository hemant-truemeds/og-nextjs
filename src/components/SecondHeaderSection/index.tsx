import React from "react";
import Image from "next/image";
import leftSvg from "@images/leftmed.svg";
import rightSvg from "@images/right.svg";
import styles from "./secondHeaderSection.module.scss";
import SearchBar from "@components/SearchBar";

const SecondHeaderSection = () => {
  return (
    <div className={styles.secondHeaderSectionWrapper}>
      <div className={styles.searchTextWrapper}>
        <p className={styles.sayGoodBuy}>Say GoodBye to high medicine prices</p>
        <h1 className={styles.comparePrices}>
          Compare prices and save upto 51%
        </h1>
        <SearchBar />
      </div>
      <div className={styles.leftImgWrapper}>
        <Image layout="fill" src={leftSvg} alt="left image" />
      </div>
      <div className={styles.rightImgWrapper}>
        <Image layout="fill" src={rightSvg} alt="right image" />
      </div>
    </div>
  );
};

export default SecondHeaderSection;
