import { HOME_APIS, HOME_STATIC_PAYLOAD } from "@api/apiConstants/homepageApi";
import { axiosBase, axiosWp } from "@api/axiosClient";

const HomepageApiCalls = async () => {
  try {
    const elastic_search = axiosBase.post(
      HOME_APIS.ELASTIC_SEARCH,
      HOME_STATIC_PAYLOAD.ELASTIC_SEARCH_PAYLOAD
    );
    const bannerData = axiosBase.post(
      HOME_APIS.BANNERS,
      JSON.stringify(["BANNERS", "ALERT", "HOME_GENERIC"])
    );
    const wpArticles = axiosWp.get(HOME_APIS.WP_ARTICLES);

    const getDeliveryCharges = axiosBase.get(HOME_APIS.GET_DELIVERY_CHARGES);
    const mobileMaster = axiosBase.post(HOME_APIS.MOBILE_MASTER);

    const allData = await Promise.all([
      elastic_search,
      bannerData,
      wpArticles,
      getDeliveryCharges,
      mobileMaster,
    ]);
    const [
      elastic_search_res,
      bannerData_res,
      wpArticles_res,
      getDeliveryCharges_res,
      mobileMaster_res,
    ] = allData;
    // console.log({ allData });

    // console.log({ mobileMaster: mobileMaster.data });

    return {
      bannerData: bannerData_res?.data,
      wpArticles: wpArticles_res?.data,
      elastic_search: elastic_search_res?.data,
      getDeliveryCharges: getDeliveryCharges_res?.data,
      mobileMaster: mobileMaster_res?.data,
    };
  } catch (error) {
    console.log({ error });
  }
  return {};
};

export { HomepageApiCalls };
