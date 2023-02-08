import { Product } from "../product/productService.types";

export type GetValueStreamsRequest = {
  structureId: number;
  props?: string[];
};

export type ProductsInCartResponse = {
  shoppingCartProducts: Product[];
};

export type CreateValueStreamRequest = {
  name: string;
  verticalId: number;
  structureId: number;
};

export type UpdateProductInCartRequest = {
  id: number;
  quantity?: number;
};
