import { HOME_APIS, HOME_STATIC_PAYLOAD } from "@api/apiConstants/homepageApi";
import { axiosBase, axiosWp } from "@api/axiosClient";

const HomepageApiCalls = async () => {
  try {
    const elastic_search = await axiosBase.post(
      HOME_APIS.ELASTIC_SEARCH,
      HOME_STATIC_PAYLOAD.ELASTIC_SEARCH_PAYLOAD
    );
    const bannerData = await axiosBase.post(
      HOME_APIS.BANNERS,
      JSON.stringify(["BANNERS", "ALERT", "HOME_GENERIC"])
    );
    const wpArticles = await axiosWp.get(HOME_APIS.WP_ARTICLES);

    const getDeliveryCharges = await axiosBase.get(
      HOME_APIS.GET_DELIVERY_CHARGES
    );
    // const mobileMaster = await axiosBase.get(HOME_APIS.MOBILE_MASTER);

    // console.log({ mobileMaster: mobileMaster.data });
    return {
      bannerData: bannerData?.data,
      wpArticles: wpArticles?.data,
      elastic_search: elastic_search?.data,
      getDeliveryCharges: getDeliveryCharges?.data,
      // mobileMaster: mobileMaster?.data,
    };
  } catch (error) {
    console.log({ error });
  }
  return {};
};

export { HomepageApiCalls };
