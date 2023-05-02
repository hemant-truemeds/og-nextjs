import React from "react";
import OfferCard from "@components/card";
// const OfferCard = React.lazy(() => import("@components/card"));
import img1 from "@images/GEMSOLINE-CAPSULE-15.webp";
import img2 from "@images/MAXIRICH-GOLD-SOFT-GELATIN-CAPSULE.webp";
import styles from "./offercardSection.module.scss";

interface IProps {
  apiCardData: any;
}

const OfferCardSection = (props: IProps) => {
  const { apiCardData } = props;
  // console.log(apiCardData);
  return (
    // <React.Suspense fallback={<h1>Loading...</h1>}>
    <div className={styles.offerCardSectionWrapper}>
      {apiCardData?.map((item: any) => {
        const {
          original_mrp,
          original_pts,
          original_sku_name,
          product_image_urls,
        } = item?._source;
        return (
          <OfferCard
            discount={Math.ceil(
              ((original_mrp - original_pts) / original_pts) * 100
            )}
            key={item?._id}
            mrp={original_mrp}
            price={original_pts}
            name={original_sku_name}
            img_url={product_image_urls}
            // img_url={index % 2 === 0 ? img1 : img2}
          />
        );
      })}
    </div>
    // </React.Suspense>
  );
};

export default OfferCardSection;
