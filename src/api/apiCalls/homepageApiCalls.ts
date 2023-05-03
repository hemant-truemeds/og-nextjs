import { HOME_APIS, HOME_STATIC_PAYLOAD } from "@api/apiConstants/homepageApi";
import { axiosBase, axiosWp } from "@api/axiosClient";
// import { bannerData } from "@constants/jsonData/bannerData";
// import { elastic_search } from "@constants/jsonData/elastic_search";
// import { getDeliveryCharges } from "@constants/jsonData/getDeliveryCharges";
// import { mobileMaster } from "@constants/jsonData/mobileMaster";
// import { wpArticles } from "@constants/jsonData/wpArticles";

export const HomepageApiCalls = async () => {
  try {
    const elastic_search = axiosBase.post(
      HOME_APIS.ELASTIC_SEARCH,
      HOME_STATIC_PAYLOAD.ELASTIC_SEARCH_PAYLOAD
    );
    const bannerData = axiosBase.post(
      HOME_APIS.BANNERS,
      HOME_STATIC_PAYLOAD.BANNER_PAYLOAD
    );
    const wpArticles = axiosWp.get(HOME_APIS.WP_ARTICLES);

    const getDeliveryCharges = axiosBase.get(HOME_APIS.GET_DELIVERY_CHARGES);
    const mobileMaster = axiosBase.post(HOME_APIS.MOBILE_MASTER);

    const allData = await Promise.allSettled([
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
      bannerData:
        bannerData_res.status === "fulfilled"
          ? bannerData_res?.value?.data
          : {},
      wpArticles:
        wpArticles_res.status === "fulfilled"
          ? wpArticles_res?.value?.data
          : [],
      elastic_search:
        elastic_search_res.status === "fulfilled"
          ? elastic_search_res?.value?.data
          : {},
      getDeliveryCharges:
        getDeliveryCharges_res.status === "fulfilled"
          ? getDeliveryCharges_res?.value?.data
          : {},
      mobileMaster:
        mobileMaster_res.status === "fulfilled"
          ? mobileMaster_res?.value?.data
          : {},
    };
  } catch (error) {
    console.log({ error });
  }
  return {};
};

// return {
//   bannerData: bannerData,
//   wpArticles: wpArticles,
//   elastic_search: elastic_search,
//   getDeliveryCharges: getDeliveryCharges,
//   mobileMaster: mobileMaster,
// };

// return {
//   bannerData: {},
//   wpArticles: [],
//   elastic_search: {},
//   getDeliveryCharges: {},
//   mobileMaster: {},
// };

// const HomepageApiCalls = async () => {
//   try {
//     const elastic_search = axiosBase.post(
//       HOME_APIS.ELASTIC_SEARCH,
//       HOME_STATIC_PAYLOAD.ELASTIC_SEARCH_PAYLOAD
//     );
//     const bannerData = axiosBase.post(
//       HOME_APIS.BANNERS,
//       HOME_STATIC_PAYLOAD.BANNER_PAYLOAD
//     );
//     const wpArticles = axiosWp.get(HOME_APIS.WP_ARTICLES);

//     const getDeliveryCharges = axiosBase.get(HOME_APIS.GET_DELIVERY_CHARGES);
//     const mobileMaster = axiosBase.post(HOME_APIS.MOBILE_MASTER);

//     const allData = await Promise.allSettled([
//       elastic_search,
//       bannerData,
//       wpArticles,
//       getDeliveryCharges,
//       mobileMaster,
//     ]);

//     const [
//       elastic_search_res,
//       bannerData_res,
//       wpArticles_res,
//       getDeliveryCharges_res,
//       mobileMaster_res,
//     ] = allData;

//     // console.log({ allData });
//     // console.log({ mobileMaster: mobileMaster.data });

//     return {
//       bannerData:
//         bannerData_res.status === "fulfilled"
//           ? bannerData_res?.value?.data
//           : {},
//       wpArticles:
//         wpArticles_res.status === "fulfilled"
//           ? wpArticles_res?.value?.data
//           : [],
//       elastic_search:
//         elastic_search_res.status === "fulfilled"
//           ? elastic_search_res?.value?.data
//           : {},
//       getDeliveryCharges:
//         getDeliveryCharges_res.status === "fulfilled"
//           ? getDeliveryCharges_res?.value?.data
//           : {},
//       mobileMaster:
//         mobileMaster_res.status === "fulfilled"
//           ? mobileMaster_res?.value?.data
//           : {},
//     };
//   } catch (error) {
//     console.log({ error });
//   }
//   return {};
// };

// const HomepageApiCalls = async () => {
//   try {
//     const elastic_search = await axiosBase.post(
//       HOME_APIS.ELASTIC_SEARCH,
//       HOME_STATIC_PAYLOAD.ELASTIC_SEARCH_PAYLOAD
//     );
//     const bannerData = await axiosBase.post(
//       HOME_APIS.BANNERS,
//       JSON.stringify(["BANNERS", "ALERT", "HOME_GENERIC"])
//     );
//     const wpArticles = await axiosWp.get(HOME_APIS.WP_ARTICLES);

//     const getDeliveryCharges = await axiosBase.get(
//       HOME_APIS.GET_DELIVERY_CHARGES
//     );
//     const mobileMaster = await axiosBase.post(HOME_APIS.MOBILE_MASTER);

//     // console.log({ mobileMaster: mobileMaster.data });

//     return {
//       bannerData: bannerData?.data,
//       wpArticles: wpArticles?.data,
//       elastic_search: elastic_search?.data,
//       getDeliveryCharges: getDeliveryCharges?.data,
//       mobileMaster: mobileMaster?.data,
//     };
//   } catch (error) {
//     console.log({ error });
//   }
//   return {};
// };
