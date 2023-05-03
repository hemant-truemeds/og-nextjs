import {
  PRODUCT_APIS,
  PRODUCT_STATIC_PAYLOAD,
} from "@api/apiConstants/productpageApi";
import { axiosBase } from "@api/axiosClient";

const getProductPage = async (id: string) => {
  try {
    const GET_PRODUCT_DETAILS = await axiosBase.post(
      PRODUCT_APIS.GET_PRODUCT_DETAILS,
      PRODUCT_STATIC_PAYLOAD.GET_PRODUCT_PAYLOAD(id)
    );
    return {
      GET_PRODUCT_DETAILS: GET_PRODUCT_DETAILS.data,
    };
  } catch (error) {
    console.log(error);
  }
  return {};
};

export { getProductPage };
