import React from "react";
import { getProductPage } from "@api/apiCalls/productpageApiCalls";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  //   GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import ProductPageModule from "@modules/productPage";

export interface IPdPageProps {
  productData: any;
  fetchMedicineDetails: any;
  getOtherProducts: any;
  abosoluteUrl: string;
}

const ProductPage = (props: IPdPageProps) => {
  const { fetchMedicineDetails, abosoluteUrl } = props;

  console.log(props);

  return (
    <>
      <Head>
        <meta
          name="description"
          content={
            fetchMedicineDetails?.MedicineDetails?.recommendedDescription || ""
          }
        />
        {/* <meta
          name="description"
          content="View Sugar Free Gold Low Calories Sweetner Pellets 500 uses, composition, side effects, price, substitutes, drug interactions, precautions, warnings, expert advice and buy online at best price on Truemeds"
        /> */}
        <link
          rel="shortcut icon"
          href="/icons/favicon.png"
          type="image/x-icon"
        />
        <link rel="canonical" href={abosoluteUrl} />
        <meta name="robots" content="all" />
        <link rel="alternate" hrefLang="en-us" href="https://truemeds/us/" />
        <title>{fetchMedicineDetails?.MedicineDetails?.recommendedTitle}</title>
      </Head>
      <div>
        {/* ProductPage ID: -{" "}
        {productData?.hits?.hits?.[0]?._source?.original_sku_name} */}
        <ProductPageModule {...props} />
      </div>
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const id: any = context.params?.id || "";
  const abosoluteUrl = context?.req?.headers?.referer;

  const pdCode: string = id
    .toUpperCase()
    .slice(id.toUpperCase().indexOf("TM-"))
    .trim();

  const {
    GET_PRODUCT_DETAILS = {},
    FETCH_MEDICINE_DETAILS = {},
    GET_OTHER_PRODUCTS = {},
  } = await getProductPage(pdCode as string);

  return {
    props: {
      productData: GET_PRODUCT_DETAILS,
      fetchMedicineDetails: FETCH_MEDICINE_DETAILS,
      getOtherProducts: GET_OTHER_PRODUCTS,
      abosoluteUrl: abosoluteUrl,
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () =>
//   //   context: GetStaticPathsContext
//   {
//     return {
//       paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//       fallback: true,
//     };
//   };
