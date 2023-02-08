import {
  Container,
  ContainerImg,
  ContainerInfos,
  Card,
  FooterContainer,
  RowSubTotal,
  RowQuantity,
  RowProduct,
  HeaderTitles,
  CardContent,
  StyledButton,
  RowTrash,
  ContainerTitleAndPriceAndRemove,
  ContainerQuantityAndSubtotal,
  ContainerSubTotal,
  ContainerTotal,
} from "./styles";
import { useCart } from "../../../../providers/CartProvider";
import { useEffect } from "react";
import QuantityPicker from "../../../../components/QuantityPicker";
import { Divider, IconButton } from "@mui/material";
import { TrashIcon } from "../../../../assets/icons";
import { Paragraph } from "../../../../styles/utils";
import { useNavigate } from "react-router-dom";

const ProductsInCart = () => {
  const {
    productsInCart,
    fetchCartProducts,
    deleteProductInShoppingCart,
    calculateCartTotal,
    updateProductInShoppingCart,
    deleteCartOfProducts,
  } = useCart();
  const navigate = useNavigate();

  const formatBrazilianCurrency = (number: number) => {
    return Number(number.toFixed(2)).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);
  return (
    <>
      <Container>
        <Card>
          <HeaderTitles>
            <Paragraph size="small" color="gray">
              PRODUTO
            </Paragraph>
            <Paragraph size="small" color="gray">
              QTD
            </Paragraph>
            <Paragraph size="small" color="gray">
              SUBTOTAL
            </Paragraph>
            <Paragraph></Paragraph>
          </HeaderTitles>

          {productsInCart.map((product) => {
            return (
              <CardContent key={product.id}>
                <RowProduct>
                  <ContainerImg>
                    <img src={product.image} alt={product.title} />
                  </ContainerImg>
                  <ContainerInfos device="mobile">
                    <Paragraph color="black" size="small">
                      {product.title}
                    </Paragraph>
                    <Paragraph size="medium">
                      {formatBrazilianCurrency(product.price)}
                    </Paragraph>
                  </ContainerInfos>
                  <ContainerInfos>
                    <ContainerTitleAndPriceAndRemove>
                      <Paragraph color="black" size="small">
                        {product.title}
                      </Paragraph>
                      <Paragraph size="medium">
                        {formatBrazilianCurrency(product.price)}
                      </Paragraph>
                      <IconButton
                        onClick={() => deleteProductInShoppingCart(product.id)}
                        aria-label="delete"
                      >
                        <TrashIcon />
                      </IconButton>
                    </ContainerTitleAndPriceAndRemove>
                    <ContainerQuantityAndSubtotal>
                      <QuantityPicker
                        value={product.quantity!}
                        onChange={(value) =>
                          updateProductInShoppingCart({
                            id: product.id,
                            quantity: value,
                          })
                        }
                      />
                      <ContainerSubTotal>
                        <Paragraph size="smaller" color="gray">
                          SUBTOTAL
                        </Paragraph>
                        <Paragraph size="medium">
                          {formatBrazilianCurrency(
                            product.quantity! * product.price
                          )}
                        </Paragraph>
                      </ContainerSubTotal>
                    </ContainerQuantityAndSubtotal>
                  </ContainerInfos>
                </RowProduct>
                <RowQuantity>
                  <QuantityPicker
                    value={product.quantity!}
                    onChange={(value) =>
                      updateProductInShoppingCart({
                        id: product.id,
                        quantity: value,
                      })
                    }
                  />
                </RowQuantity>
                <RowSubTotal>
                  <Paragraph size="medium">
                    {formatBrazilianCurrency(product.quantity! * product.price)}
                  </Paragraph>
                </RowSubTotal>
                <RowTrash>
                  <IconButton
                    onClick={() => deleteProductInShoppingCart(product.id)}
                    aria-label="delete"
                  >
                    <TrashIcon />
                  </IconButton>
                </RowTrash>
              </CardContent>
            );
          })}
          <Divider />
          <FooterContainer>
            <StyledButton
              variant="contained"
              disableElevation
              onClick={() => {
                deleteCartOfProducts();
                navigate("/purchase-completed");
              }}
            >
              FINALIZAR PEDIDO
            </StyledButton>
            <Paragraph device="mobile"></Paragraph>
            <Paragraph size="small" color="gray" device="mobile">
              TOTAL
            </Paragraph>
            <Paragraph size="large" device="mobile">
              {Number(calculateCartTotal().toFixed(2)).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Paragraph>
            <ContainerTotal>
              <Paragraph></Paragraph>
              <Paragraph size="small" color="gray">
                TOTAL
              </Paragraph>
              <Paragraph size="large">
                {Number(calculateCartTotal().toFixed(2)).toLocaleString(
                  "pt-br",
                  {
                    style: "currency",
                    currency: "BRL",
                  }
                )}
              </Paragraph>
            </ContainerTotal>
          </FooterContainer>
        </Card>
      </Container>
    </>
  );
};

export default ProductsInCart;
