import React, { useState } from "react";
import Image from "next/image";
import locationSvg from "@images/location.svg";
import arrowSvg from "@images/arrow.svg";
import searchSvg from "@images/search.svg";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={styles.searchBarWrapper}>
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
            <Image width={20} height={20} src={arrowSvg} alt="location image" />
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
  );
};

export default SearchBar;
