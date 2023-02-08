import {
  SUCCESS_CODE,
  SHOPPING_CART_ROUTES,
  WEMOVIES_BFF_PATH,
} from "../../constants/rest";
import Api from "../../api";
import {
  ProductsInCartResponse,
  UpdateProductInCartRequest,
} from "./shoppingCartService.types";
import { Product } from "../product/productService.types";

export const getProductsFromShoppingCart =
  async (): Promise<ProductsInCartResponse> => {
    const response = await Api.get({
      url: `${WEMOVIES_BFF_PATH}${SHOPPING_CART_ROUTES.shoppingCart}`,
    });

    return new Promise((resolve, reject) => {
      if (SUCCESS_CODE.includes(response.status)) {
        resolve(response.data);
      } else {
        reject(response);
      }
    });
  };

export const addProductToCart = async (addProduct: Product): Promise<void> => {
  const response = await Api.post({
    url: `${WEMOVIES_BFF_PATH}${SHOPPING_CART_ROUTES.shoppingCart}`,
    body: addProduct,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};

export const updateProductInCart = async <Product>(
  updatedProduct: UpdateProductInCartRequest
): Promise<Product> => {
  const response = await Api.put({
    url: `${WEMOVIES_BFF_PATH}${SHOPPING_CART_ROUTES.productInCartById.generate(
      updatedProduct.id
    )}`,
    body: updatedProduct,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE.includes(response.status)) {
      resolve(response.data);
    } else {
      reject(response);
    }
  });
};

export const deleteProductFromCart = async (
  productId: number
): Promise<void> => {
  const response = await Api.delete({
    url: `${WEMOVIES_BFF_PATH}${SHOPPING_CART_ROUTES.productInCartById.generate(
      productId
    )}`,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE.includes(response.status)) {
      resolve(response);
    } else {
      reject(response);
    }
  });
};

export const deleteShoppingCart = async (): Promise<void> => {
  const response = await Api.delete({
    url: `${WEMOVIES_BFF_PATH}${SHOPPING_CART_ROUTES.shoppingCart}`,
  });

  return new Promise((resolve, reject) => {
    if (SUCCESS_CODE.includes(response.status)) {
      resolve(response);
    } else {
      reject(response);
    }
  });
};
