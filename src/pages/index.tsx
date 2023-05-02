import React from "react";
import { GetServerSideProps } from "next";
import { HomepageApiCalls } from "@api/apiCalls/homepageApiCalls";
import HomeModule from "@modules/home";

export interface IHomePage {
  bannerData: any;
  wpArticles: any;
  elastic_search: any;
}

const Home: React.FC<IHomePage> = (props) => {
  const { bannerData = {}, wpArticles = {}, elastic_search = {} } = props;
  // console.log(props);

  return (
    <HomeModule
      bannerData={bannerData}
      wpArticles={wpArticles}
      elastic_search={elastic_search}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const {
      bannerData = {},
      wpArticles = {},
      elastic_search = {},
    } = await HomepageApiCalls();
    // console.log("ssr", res?.bannerData);
    return {
      props: {
        bannerData,
        wpArticles,
        elastic_search,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      bannerData: {},
      wpArticles: {},
      elastic_search: {},
    },
  };
};

export default Home;
