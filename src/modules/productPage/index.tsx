import React from "react";
import styles from "./productPage.module.scss";
import { IPdPageProps } from "src/pages/medicine/[id]";

const ProductPageModule = (props: IPdPageProps) => {
  const { productData, fetchMedicineDetails, getOtherProducts } = props;
  return <div>ProductPageModule</div>;
};

export default ProductPageModule;
