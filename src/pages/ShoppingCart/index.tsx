import ProductsInCart from "./components/ProductsInCart";
import { useCart } from "../../providers/CartProvider";
import CartEmpty from "../../assets/imgs/cartEmpty.png";
import InformationCard from "../../components/InformationCard";

const ShoppingCart = () => {
  const { getQuantityInCart } = useCart();

  return (
    <>
      {getQuantityInCart() > 0 ? (
        <ProductsInCart />
      ) : (
        <InformationCard
          text={"Parece que não há nada por aqui :("}
          img={CartEmpty}
        />
      )}
    </>
  );
};

export default ShoppingCart;
