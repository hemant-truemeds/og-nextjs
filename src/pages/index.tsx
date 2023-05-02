import React from "react";
import { GetServerSideProps } from "next";
import { HomepageApiCalls } from "@api/apiCalls/homepageApiCalls";
import HomeModule from "@modules/home";

export interface IHomePage {
  bannerData: any;
  wpArticles: any;
}

const Home: React.FC<IHomePage> = (props) => {
  const { bannerData = {}, wpArticles = {} } = props;
  console.log(props);

  return <HomeModule bannerData={bannerData} wpArticles={wpArticles} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { bannerData = {}, wpArticles = {} } = await HomepageApiCalls();
    // console.log("ssr", res?.bannerData);
    return {
      props: {
        bannerData,
        wpArticles,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      bannerData: {},
      wpArticles: {},
    },
  };
};

export default Home;
