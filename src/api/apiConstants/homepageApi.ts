// const  "https://nal.tmmumbai.in/";

export enum HOME_APIS {
  BANNERS = "CustomerService/getBannersForHomePage?type=website",
  ELASTIC_SEARCH = "CustomerService/callElasticSearch?",
  GET_DELIVERY_CHARGES = "CustomerService/getCustomerDeliveryChargeData",
  MOBILE_MASTER = "CustomerService/mobileMaster",
  SAVE_CUST_DEVICE_ID = "CustomerService/saveCustomerDeviceInfo",
  WP_ARTICLES = "getWordpressArticle?urlParams=posts?status=publish&_embed&order=desc&per_page=10&headers=true",
}
