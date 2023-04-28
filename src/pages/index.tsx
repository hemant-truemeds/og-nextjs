import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import HomeModule from "src/modules/home";

import { axiosInstance } from "src/api/axiosClient";
import { HOME_APIS } from "src/api/homepageApi";

export interface IHomePage {
  data: any;
}

const Home: React.FC<IHomePage> = (props) => {
  const { data } = props;

  return <HomeModule data={data} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axiosInstance.post(
      HOME_APIS.BANNERS,
      JSON.stringify(["BANNERS", "ALERT", "HOME_GENERIC"])
    );
    // console.log(res?.data);
    // const res = await fetch("https://poc-api-mauve.vercel.app/poc_json/fp");
    // const data = await res.json();
    return {
      props: {
        data: res?.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      data: "",
    },
  };
};

export default Home;
