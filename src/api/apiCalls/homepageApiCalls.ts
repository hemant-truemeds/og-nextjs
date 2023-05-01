import { HOME_APIS } from "@api/apiConstants/homepageApi";
import { axiosClient } from "@api/axiosClient";

const HomepageApiCalls = async () => {
  try {
    const bannerData = await axiosClient.post(
      HOME_APIS.BANNERS,
      JSON.stringify(["BANNERS", "ALERT", "HOME_GENERIC"])
    );
    return {
      bannerData: bannerData?.data,
    };
  } catch (error) {
    console.log({ error });
  }
  return {};
};

export { HomepageApiCalls };
