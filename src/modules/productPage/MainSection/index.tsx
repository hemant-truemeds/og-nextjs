import React from "react";
import Link from "next/link";
import styles from "./mainSection.module.scss";
import PdSlider from "./pdSlider";

interface IProps {
  productData: any;
}

const MainSection: React.FC<IProps> = (props) => {
  const { productData } = props;
  const { product_image_urls = "" } =
    productData?.hits?.hits?.[0]?._source || {};

  return (
    <div className={styles.mainSectionWrapper}>
      <div className={styles.main_innerContainer}>
        <div className={styles.breadcrumb}>
          <span>
            <span className={styles.breadcrumbLink}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </span>
            <span className={styles.breadcrumbSeparator}>/</span>
          </span>
          <span>
            <span className={styles.breadcrumbLink}>Gemsoline Capsule 15</span>
            {/* <span className={styles.breadcrumbSeparator}>/</span> */}
          </span>
        </div>
        <div className={styles.productWrapper}>
          <div className={styles.imgSliderWrapper}>
            <PdSlider product_image_urls={product_image_urls} />
          </div>
          <div className={styles.productDetailsWrapper}></div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
