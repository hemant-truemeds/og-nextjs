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

  return (
    // <React.Suspense fallback={<h1>Loading...</h1>}>
    <div className={styles.offerCardSectionWrapper}>
      {apiCardData?.map((item: any, index: number) => {
        return (
          <OfferCard
            discount={Math.ceil(Math.random() * 70)}
            key={item?._id}
            mrp={item?._source?.original_mrp}
            price={item?._source?.original_pts}
            name={item?._source?.original_sku_name}
            img_url={index % 2 === 0 ? img1 : img2}
          />
        );
      })}
    </div>
    // </React.Suspense>
  );
};

export default OfferCardSection;
