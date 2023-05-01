import React from "react";
import { GetServerSideProps } from "next";
import { HomepageApiCalls } from "@api/apiCalls/homepageApiCalls";
import HomeModule from "@modules/home";

export interface IHomePage {
  bannerData: any;
}

const Home: React.FC<IHomePage> = (props) => {
  const { bannerData } = props;

  return <HomeModule bannerData={bannerData} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await HomepageApiCalls();
    console.log("ssr", res?.bannerData);
    return {
      props: {
        bannerData: res?.bannerData,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: {},
    },
  };
};

export default Home;
