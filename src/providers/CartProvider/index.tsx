import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import useFetch, { State } from "../../hooks/useFetch";
import {
  addProductToCart,
  deleteProductFromCart,
  deleteShoppingCart,
  getProductsFromShoppingCart,
  updateProductInCart,
} from "../../services/shoppingCart/shoppingCartService";
import { ProductsInCartResponse } from "../../services/shoppingCart/shoppingCartService.types";
import {
  Product,
  UpdateProductInCartRequest,
} from "../../services/product/productService.types";

interface CartProps {
  children: ReactNode;
}
interface CartProviderData {
  productsInCart: Product[];

  addProductToShoppingCart: (product: Product) => void;

  deleteProductInShoppingCart: (productId: number) => void;

  verifyIfProductAlreadyAdded: (productId: number) => boolean;

  fetchCartProducts: () => void;

  getQuantityInCart: () => number;

  getProductQuantityInCart: (productId: number) => number;

  updateProductInShoppingCart: (product: UpdateProductInCartRequest) => void;

  calculateCartTotal: () => number;

  deleteCartOfProducts: () => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [productsInCart, setProductsInCart] = useState<Product[]>([]);
  const { state: cartProductsState, fetchData: fetchCartProducts } = useFetch<
    ProductsInCartResponse,
    void
  >(getProductsFromShoppingCart);

  const addProductToShoppingCart = async (product: Product) => {
    await addProductToCart(product);
    fetchCartProducts();
  };

  const deleteProductInShoppingCart = (productId: number) => {
    deleteProductFromCart(productId);
    fetchCartProducts();
  };

  const verifyIfProductAlreadyAdded = (
    productId: number,
    productsInCart: Product[]
  ) => {
    return productsInCart.some(
      (product) => Number(product.id) === Number(productId)
    );
  };

  const getQuantityInCart = () => {
    return (
      productsInCart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity!,
        0
      ) || 0
    );
  };

  const getProductQuantityInCart = (productId: number) => {
    return (
      productsInCart.find((product) => Number(product.id) === Number(productId))
        ?.quantity || 0
    );
  };

  const updateProductInShoppingCart = (product: UpdateProductInCartRequest) => {
    if (product.quantity) {
      updateProductInCart(product);
      fetchCartProducts();
    } else {
      const productFounded = productsInCart.find(
        (productInCart) => Number(productInCart.id) === Number(product.id)
      );
      const productObj = {
        id: product.id,
        quantity: productFounded?.quantity! + 1,
      };
      updateProductInCart(productObj);
      fetchCartProducts();
    }
  };

  const calculateCartTotal = () => {
    const totalPrice = productsInCart.reduce((acc, product) => {
      return acc + product.price * product.quantity!;
    }, 0);
    return totalPrice;
  };

  const deleteCartOfProducts = () => {
    deleteShoppingCart();
    fetchCartProducts();
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    setProductsInCart(cartProductsState.response?.shoppingCartProducts || []);
  }, [cartProductsState.response?.shoppingCartProducts]);

  const value = useMemo(
    () => ({
      productsInCart,
      addProductToShoppingCart,
      deleteProductInShoppingCart,
      verifyIfProductAlreadyAdded: (productId: number) => {
        return verifyIfProductAlreadyAdded(productId, productsInCart || []);
      },
      fetchCartProducts,
      getQuantityInCart,
      getProductQuantityInCart,
      updateProductInShoppingCart,
      calculateCartTotal,
      deleteCartOfProducts,
    }),
    [
      productsInCart,
      addProductToShoppingCart,
      deleteProductInShoppingCart,
      verifyIfProductAlreadyAdded,
      fetchCartProducts,
      getQuantityInCart,
      getProductQuantityInCart,
      updateProductInShoppingCart,
      calculateCartTotal,
      deleteCartOfProducts,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
