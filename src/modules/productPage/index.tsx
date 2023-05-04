import React from "react";
import { IPdPageProps } from "src/pages/medicine/[id]";
import { Header } from "@components/header";
import styles from "./productPage.module.scss";

const ProductPageModule = (props: IPdPageProps) => {
  const { productData, fetchMedicineDetails, getOtherProducts } = props;
  return (
    <div className={styles.pdPageModuleWrapper}>
      <Header showSearchBar />
      <h1>ProductPageModule</h1>
    </div>
  );
};

export default ProductPageModule;
