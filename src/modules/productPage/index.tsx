import React from "react";
import { IPdPageProps } from "src/pages/medicine/[id]";
import { Header } from "@components/header";
import MainSection from "./MainSection";
import OfferCardSection from "@components/OfferCardSection";
import Footer from "@components/footer";
import styles from "./productPage.module.scss";

const ProductPageModule = (props: IPdPageProps) => {
  const { productData, fetchMedicineDetails, getOtherProducts } = props;
  return (
    <div className={styles.pdPageModuleWrapper}>
      <Header showSearchBar />
      <MainSection productData={productData} />
      <OfferCardSection apiCardData={getOtherProducts?.hits?.hits} />
      <Footer />
    </div>
  );
};

export default ProductPageModule;
