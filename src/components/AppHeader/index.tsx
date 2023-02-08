import { useNavigate } from "react-router-dom";
import {
  AppHeaderWrapper,
  ShoppingCartContainer,
  ShoppingCartIconContainer,
  ShoppingCartInfo,
  StyledLink,
} from "./styles";
import { ShoppingIcon } from "../../assets/icons";
import { useCart } from "../../providers/CartProvider";

const AppHeader = () => {
  const navigate = useNavigate();
  const { getQuantityInCart } = useCart();

  return (
    <AppHeaderWrapper>
      <StyledLink onClick={() => navigate("/")}>WeMovies</StyledLink>
      <ShoppingCartContainer>
        <ShoppingCartInfo onClick={() => navigate("/shopping-cart")}>
          <h3>Meu carrinho</h3>
          <p>{getQuantityInCart()} itens</p>
        </ShoppingCartInfo>
        <ShoppingCartIconContainer onClick={() => navigate("/shopping-cart")}>
          <ShoppingIcon />
        </ShoppingCartIconContainer>
      </ShoppingCartContainer>
    </AppHeaderWrapper>
  );
};

export default AppHeader;
