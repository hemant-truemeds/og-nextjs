import React from "react";
import { IPdPageProps } from "src/pages/medicine/[id]";
import { Header } from "@components/header";
import styles from "./productPage.module.scss";
import MainSection from "./MainSection";

const ProductPageModule = (props: IPdPageProps) => {
  const { productData, fetchMedicineDetails, getOtherProducts } = props;
  return (
    <div className={styles.pdPageModuleWrapper}>
      <Header showSearchBar />
      <MainSection />
    </div>
  );
};

export default ProductPageModule;
