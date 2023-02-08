import { generatePath } from "react-router-dom";

export const SHOPPING_CART_ROUTES = {
  shoppingCart: "/shopping-cart",
  productInCartById: {
    route: "/shopping-cart/:productId",
    generate(productId: number) {
      return generatePath(this.route, { productId });
    },
  },
};
