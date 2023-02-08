import { SHOPPING_CART_ROUTES } from "../../constants";

export const shoppingCartRoutes = (context) => {
  context.del(
    SHOPPING_CART_ROUTES.productInCartById.route,
    function (schema, request) {
      const { productId } = request.params;

      schema.shoppingCartProducts.find(productId).destroy();
    }
  );

  context.del(SHOPPING_CART_ROUTES.shoppingCart, function (schema) {
    schema.db.emptyData();
  });

  context.get(SHOPPING_CART_ROUTES.shoppingCart, function (schema) {
    return schema.shoppingCartProducts.all();
  });

  context.post(SHOPPING_CART_ROUTES.shoppingCart, function (schema, request) {
    const attrs = JSON.parse(request.requestBody);
    const productFound = schema.shoppingCartProducts.find(attrs.id);

    if (productFound) {
      return attrs;
    }
    
    const productObj = {
      ...attrs,
      quantity: 1,
    };
    const insertedData = schema.db.shoppingCartProducts.insert(productObj);

    return { name: insertedData.name, id: Number(insertedData.id) };
  });

  context.put(
    SHOPPING_CART_ROUTES.productInCartById.route,
    function (schema, request) {
      const { productId } = request.params;
      const attrs = JSON.parse(request.requestBody);

      const productFound = schema.shoppingCartProducts.find(productId);
      productFound.update(attrs);
      productFound.save();

      return { ...productFound.attrs };
    }
  );
};
