import { PRODUCT_ROUTES } from "../../constants/rest";
import { products } from "../mocks";

export const productRoutes = (context) => {
  context.get(PRODUCT_ROUTES.products, function (schema) {
    return { products };
  });
};
