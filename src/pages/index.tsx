import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { HomepageApiCalls } from "@api/apiCalls/homepageApiCalls";
import HomeModule from "@modules/home";

export interface IHomePage {
  bannerData: any;
  wpArticles: any;
  elastic_search: any;
  getDeliveryCharges: any;
  mobileMaster: any;
}

const Home: React.FC<IHomePage> = (props) => {
  const {
    bannerData,
    wpArticles,
    elastic_search,
    getDeliveryCharges,
    mobileMaster,
  } = props;
  // console.log(props);

  return (
    <HomeModule
      bannerData={bannerData}
      wpArticles={wpArticles}
      elastic_search={elastic_search}
      getDeliveryCharges={getDeliveryCharges}
      mobileMaster={mobileMaster}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      bannerData = {},
      wpArticles = [],
      elastic_search = {},
      getDeliveryCharges = {},
      mobileMaster = {},
    } = await HomepageApiCalls();
    // console.log("ssr", res?.bannerData);
    return {
      props: {
        bannerData,
        wpArticles,
        elastic_search,
        getDeliveryCharges,
        mobileMaster,
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
    },
  };
};

export default Home;
