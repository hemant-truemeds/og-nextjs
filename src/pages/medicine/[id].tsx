import React from "react";
import { getProductPage } from "@api/apiCalls/productpageApiCalls";
import {
  GetStaticPaths,
  //   GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";

interface IProps {
  productData: any;
}

const ProductPage = (props: IProps) => {
  const { productData } = props;

  console.log(productData);

  return (
    <div>
      ProductPage ID: -{" "}
      {productData?.hits?.hits?.[0]?._source?.original_sku_name}
    </div>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  const id: any = context.params?.id || "";

  const pdCode: string = id
    .toUpperCase()
    .slice(id.toUpperCase().indexOf("TM-"))
    .trim();

  const { GET_PRODUCT_DETAILS = {} } = await getProductPage(pdCode as string);
  return {
    props: {
      productData: GET_PRODUCT_DETAILS,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () =>
  //   context: GetStaticPathsContext
  {
    //   const {} = context;
    return {
      paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
      fallback: true,
    };
  };
