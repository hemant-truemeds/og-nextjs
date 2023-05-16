import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  PreviewData,
} from "next";
import { HomepageApiCalls } from "@api/apiCalls/homepageApiCalls";
import HomeModule from "@modules/home";
import { ParsedUrlQuery } from "querystring";

export interface IHomePage {
  bannerData: any;
  wpArticles: any;
  elastic_search: any;
  getDeliveryCharges: any;
  mobileMaster: any;
  abosoluteUrl: string;
}

const Home: React.FC<IHomePage> = (props) => {
  console.log(props);

  return <HomeModule {...props} />;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  try {
    const {
      bannerData = {},
      wpArticles = [],
      elastic_search = {},
      getDeliveryCharges = {},
      mobileMaster = {},
    } = await HomepageApiCalls();
    // console.log("ssr", res?.bannerData);
    // const { resolvedUrl } = context;
    let resolvedUrl = "";
    const abosoluteUrl = `${process.env.ROOT_HOST}${resolvedUrl}`;
    return {
      props: {
        bannerData,
        wpArticles,
        elastic_search,
        getDeliveryCharges,
        mobileMaster,
        abosoluteUrl,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      bannerData: {},
      wpArticles: [],
      elastic_search: {},
      getDeliveryCharges: {},
      mobileMaster: {},
      abosoluteUrl: "",
    },
  };
};

export default Home;
