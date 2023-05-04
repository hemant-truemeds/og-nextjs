import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PdSlider from "./pdSlider";
import DropDown from "@components/dropdown";
import { staticValue } from "@constants/PdDropdown";
import dustbinSvg from "@images/dustbin.svg";
import styles from "./mainSection.module.scss";

interface IProps {
  productData: any;
}

const MainSection: React.FC<IProps> = (props) => {
  const { productData } = props;
  const {
    product_image_urls = "",
    original_sku_name = "",
    original_company_nm = "",
    subs_taken_count = "",
    subs_base_discount = "",
    subs_mrp = "",
    subs_selling_price = "",
  } = productData?.hits?.hits?.[0]?._source || {};
  const [items] = useState<{ label: string; value: string }[]>(staticValue);
  const [value, setValue] = useState<string | undefined>();
  const [showAddToCartBtn, setShowAddToCartBtn] = useState<boolean>(true);

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
            <span className={styles.breadcrumbLink}>{original_sku_name}</span>
            {/* <span className={styles.breadcrumbSeparator}>/</span> */}
          </span>
        </div>
        <div className={styles.productWrapper}>
          <div className={styles.imgSliderWrapper}>
            <PdSlider product_image_urls={product_image_urls} />
          </div>
          <div className={styles.productDetailsWrapper}>
            <div className={styles.firstTitleSection}>
              <h1 className={styles.medName}>{original_sku_name}</h1>
              <p className={styles.medCompany}>{original_company_nm}</p>
              <p className={`${styles.medStrips} hideMob}`}>
                Pack of {subs_taken_count} Units
              </p>
              <div className={`${styles.priceDistributionWrapper} hideMob`}>
                <p className={styles.medSelling}>
                  ₹{parseFloat(subs_selling_price || 0).toFixed(2)}
                </p>
                <p className={styles.medMrp}>
                  MRP <del>₹{subs_mrp}</del>
                </p>
                <p className={styles.medDiscount}>{subs_base_discount}% OFF</p>
              </div>
              <div className={styles.buttonAnddropDownWrapper}>
                {showAddToCartBtn ? (
                  <button
                    onClick={() => setShowAddToCartBtn((prev) => !prev)}
                    className={styles.addToCartButton}
                  >
                    ADD TO CART
                  </button>
                ) : (
                  <>
                    <DropDown items={items} value={value} setValue={setValue} />
                    <div
                      onClick={() => setShowAddToCartBtn((prev) => !prev)}
                      className={styles.dustbinWrapper}
                    >
                      <Image
                        //   priority
                        layout="fill"
                        objectFit="contain"
                        src={dustbinSvg}
                        alt=""
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
