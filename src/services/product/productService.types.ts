export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number;
};

export type GetValueStreamsRequest = {
  structureId: number;
  props?: string[];
};

export type ProductsResponse = {
  products: Product[];
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
