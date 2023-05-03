// const  "https://nal.tmmumbai.in/";

enum HOME_APIS {
  BANNERS = "CustomerService/getBannersForHomePage?type=website",
  ELASTIC_SEARCH = "CustomerService/callElasticSearch?warehouseId=3",
  GET_DELIVERY_CHARGES = "CustomerService/getCustomerDeliveryChargeData",
  MOBILE_MASTER = "CustomerService/mobileMaster",
  WP_ARTICLES = "getWordpressArticle?urlParams=posts?status=publish&_embed&order=desc&per_page=10&headers=true",
  // SAVE_CUST_DEVICE_ID = "CustomerService/saveCustomerDeviceInfo",
}

const HOME_STATIC_PAYLOAD = {
  BANNER_PAYLOAD: JSON.stringify(["BANNERS", "ALERT", "HOME_GENERIC"]),
  ELASTIC_SEARCH_PAYLOAD: {
    size: 50,
    query: {
      bool: {
        should: [
          {
            terms: {
              "original_product_code.keyword": [
                "TM-TACR1-046233",
                "TM-TACR1-052916",
                "TM-POER1-001997",
                "TM-SOLE1-000133",
                "TM-POER1-001128",
                "TM-STPS1-000072",
                "TM-TACR1-006144",
                "TM-PEEN1-000003",
                "TM-SPER1-000268",
                "TM-INON1-000294",
                "TM-CACR1-002212",
                "TM-TACR1-048066",
                "TM-TACR1-053743",
                "TM-TACR1-050886",
                "TM-TACR1-048864",
              ],
            },
          },
        ],
      },
    },
  },
};

Object.freeze(HOME_STATIC_PAYLOAD);

export { HOME_APIS, HOME_STATIC_PAYLOAD };
