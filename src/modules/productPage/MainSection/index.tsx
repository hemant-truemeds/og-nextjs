import React from "react";
import styles from "./mainSection.module.scss";

const MainSection = () => {
  return (
    <div className={styles.mainSectionWrapper}>
      <div className={styles.main_innerContainer}>
        <div className={styles.breadcrumb}>
          <span>
            <span className={styles.breadcrumbLink}>Home</span>
            <span className={styles.breadcrumbSeparator}>/</span>
          </span>
          <span>
            <span className={styles.breadcrumbLink}>Gemsoline Capsule 15</span>
            {/* <span className={styles.breadcrumbSeparator}>/</span> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
