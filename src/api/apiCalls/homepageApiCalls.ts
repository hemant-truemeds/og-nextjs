import { HOME_APIS } from "@api/apiConstants/homepageApi";
import { axiosBase, axiosWp } from "@api/axiosClient";

const HomepageApiCalls = async () => {
  try {
    const bannerData = await axiosBase.post(
      HOME_APIS.BANNERS,
      JSON.stringify(["BANNERS", "ALERT", "HOME_GENERIC"])
    );
    const wpArticles = await axiosWp.get(HOME_APIS.WP_ARTICLES);
    // console.log({ wpArticles });
    return {
      bannerData: bannerData?.data,
      wpArticles: wpArticles?.data,
    };
  } catch (error) {
    console.log({ error });
  }
  return {};
};

export { HomepageApiCalls };
