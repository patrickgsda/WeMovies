import {
  Container,
  ContainerImg,
  ContainerInfos,
  Card,
  ContainerButton,
  StyledButton,
  ButtonContent,
} from "./styles";
import { useCart } from "../../../../providers/CartProvider";
import { useEffect } from "react";
import { getProducts } from "../../../../services/product/productService";
import useFetch from "../../../../hooks/useFetch";
import { ProductsResponse } from "../../../../services/product/productService.types";
import { ShoppingCartWithPlusIcon } from "../../../../assets/icons";
import { Paragraph } from "../../../../styles/utils";

const Products = () => {
  const {
    addProductToShoppingCart,
    verifyIfProductAlreadyAdded,
    getProductQuantityInCart,
    updateProductInShoppingCart,
  } = useCart();
  const { state: productsState, fetchData: fetchProducts } = useFetch<
    ProductsResponse,
    void
  >(getProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      {productsState.response?.products.map((product) => {
        return (
          <Card variant="outlined" key={product.id}>
            <ContainerImg>
              <img src={product.image} alt={product.title} />
            </ContainerImg>
            <ContainerInfos>
              <Paragraph size="small">{product.title}</Paragraph>
              <Paragraph size="medium">R$ {product.price.toFixed(2)}</Paragraph>
            </ContainerInfos>
            <ContainerButton>
              {verifyIfProductAlreadyAdded(product.id) ? (
                <StyledButton
                  backgroundColor="green"
                  onClick={() => {
                    updateProductInShoppingCart({
                      id: product.id
                    });
                  }}
                >
                  <ButtonContent>
                    <ShoppingCartWithPlusIcon />
                    <Paragraph size="smallerFontWeightAltered">
                      {getProductQuantityInCart(product.id)}
                    </Paragraph>
                    <Paragraph size="smaller">ITEM ADICIONADO</Paragraph>
                  </ButtonContent>
                </StyledButton>
              ) : (
                <StyledButton
                  onClick={() => {
                    addProductToShoppingCart(product);
                  }}
                >
                  <ButtonContent>
                    <ShoppingCartWithPlusIcon />
                    <Paragraph size="smallerFontWeightAltered">
                      {getProductQuantityInCart(product.id)}
                    </Paragraph>
                    <Paragraph size="smaller">ADICIONAR AO CARRINHO</Paragraph>
                  </ButtonContent>
                </StyledButton>
              )}
            </ContainerButton>
          </Card>
        );
      })}
    </Container>
  );
};

export default Products;
