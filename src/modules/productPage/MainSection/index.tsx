import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PdSlider from "./pdSlider";
import DropDown from "@components/dropdown";
import { staticValue } from "@constants/PdDropdown";
import dustbinSvg from "@images/dustbin.svg";
import styles from "./mainSection.module.scss";
import Composition from "./composition";
import Collapsible from "@components/collapsable";
import {
  ICollapsibleConstant,
  // collapsibleConstant,
  getCollapsableData,
} from "@constants/collapsableConstant";
import DoctorList from "./doctorList";
import { ROOT_URL } from "@constants/Routes";

interface IProps {
  productData: any;
  fetchMedicineDetails: any;
}

const MainSection: React.FC<IProps> = (props) => {
  const { productData, fetchMedicineDetails } = props;
  const {
    product_image_urls = "",
    original_sku_name = "",
    original_company_nm = "",
    subs_taken_count = "",
    subs_base_discount = "",
    subs_mrp = "",
    subs_selling_price = "",
    original_composition = "",
    original_mrp = "",
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
              <Link as={ROOT_URL} href="/">
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
                  ₹
                  {parseFloat(original_mrp || subs_selling_price || 0).toFixed(
                    2
                  )}
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
                        alt="dust bin image"
                      />
                    </div>
                  </>
                )}
              </div>
              <Composition original_composition={original_composition} />
              <div className={styles.collapsableContainer}>
                {getCollapsableData(
                  original_sku_name,
                  fetchMedicineDetails?.MedicineDetails
                )?.map((item: ICollapsibleConstant, index: number) => {
                  return (
                    <Collapsible
                      key={index}
                      title={item.title}
                      description={item.description}
                      nestedTitle={item.nestedTitle}
                    />
                  );
                })}
              </div>
              <div className={styles.doctorListWrapper}>
                <h3 className={styles.doctorListTitle}>Certified Content</h3>
                {/* <DoctorList doctorList={fetchMedicineDetails?.DoctorList} /> */}
                {fetchMedicineDetails?.DoctorList?.map(
                  (item: any, index: number) => {
                    return (
                      <DoctorList
                        key={index}
                        doctorName={item?.doctorName}
                        experience={item?.experience}
                        specialist={item?.specialist?.[0]}
                        image={item?.image}
                        qualification={item?.qualification?.[0]}
                      />
                    );
                  }
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
