import React, { useState } from "react";
import Image from "next/image";
import leftSvg from "@images/leftmed.svg";
import rightSvg from "@images/right.svg";
import locationSvg from "@images/location.svg";
import arrowSvg from "@images/arrow.svg";
import searchSvg from "@images/search.svg";
import styles from "./searchSection.module.scss";

const SearchSection = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className={styles.searchSectionWrapper}>
      <div className={styles.searchTextWrapper}>
        <p className={styles.sayGoodBuy}>Say GoodBye to high medicine prices</p>
        <h1 className={styles.comparePrices}>
          Compare prices and save upto 51%
        </h1>
        <div className={styles.inputWrapper}>
          <div className={styles.location_inputContainer}>
            <div className={styles.locationContainer}>
              <div className={styles.locationImageWrapper}>
                <Image
                  width={20}
                  height={20}
                  src={locationSvg}
                  style={{ opacity: "0.7" }}
                  alt="arrow image"
                />
              </div>
              <p className={styles.deliverTo}>Deliver to</p>
              <div className={styles.arrowImageWrapper}>
                <Image
                  width={20}
                  height={20}
                  src={arrowSvg}
                  alt="location image"
                />
              </div>
            </div>
            <div className={styles.searchImageWrapper}>
              <Image
                layout="fill"
                src={searchSvg}
                alt="search image"
                style={{ opacity: "0.3" }}
              />
            </div>
            <input
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for TELMA"
              type="text"
            />
          </div>
          <div className={styles.searchButtonContainer}>Search</div>
        </div>
      </div>
      <div className={styles.leftImgWrapper}>
        <Image layout="fill" src={leftSvg} alt="left image" priority />
      </div>
      <div className={styles.rightImgWrapper}>
        <Image layout="fill" src={rightSvg} alt="right image" priority />
      </div>
    </div>
  );
};

export default SearchSection;
