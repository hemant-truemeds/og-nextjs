import {
  PRODUCT_APIS,
  PRODUCT_STATIC_PAYLOAD,
} from "@api/apiConstants/productpageApi";
import { Base_URLS, axiosBase } from "@api/axiosClient";

const getProductPage = async (id: string) => {
  try {
    const GET_PRODUCT_DETAILS = await axiosBase.post(
      PRODUCT_APIS.GET_PRODUCT_DETAILS,
      PRODUCT_STATIC_PAYLOAD.GET_PRODUCT_PAYLOAD(id)
    );
    const GET_OTHER_PRODUCTS = await axiosBase.post(
      PRODUCT_APIS.GET_OTHER_PRODUCTS,
      PRODUCT_STATIC_PAYLOAD.GET_OTHER_PRODUCT_PAYLOAD
    );
    const FETCH_MEDICINE_DETAILS = await fetch(
      Base_URLS.BASE_URL + PRODUCT_APIS.FETCH_MEDICINE_DETAILS,
      {
        method: "POST",
        body: PRODUCT_STATIC_PAYLOAD.FETCH_MEDICINE_PAYLOAD(id),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const FETCH_MEDICINE_DETAILS_RES = await FETCH_MEDICINE_DETAILS.json();

    return {
      GET_PRODUCT_DETAILS: GET_PRODUCT_DETAILS.data,
      GET_OTHER_PRODUCTS: GET_OTHER_PRODUCTS.data,
      FETCH_MEDICINE_DETAILS: FETCH_MEDICINE_DETAILS_RES,
    };
  } catch (error) {
    console.log(error);
  }
  return {};
};

export { getProductPage };
