import {
  SUCCESS_CODE,
  WEMOVIES_BFF_PATH,
  PRODUCT_ROUTES,
} from "../../constants/rest";
import Api from "../../api";
import { ProductsResponse } from "./productService.types";

export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await Api.get({
    url: `${WEMOVIES_BFF_PATH}${PRODUCT_ROUTES.products}`,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};
