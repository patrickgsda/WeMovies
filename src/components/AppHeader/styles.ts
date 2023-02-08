import { styled } from "../../styles/stitches";

const ButtonsWrapper = styled("div", {
  marginLeft: "auto",
  display: "flex",
  gap: "$4",
});

const AppHeaderWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "24px",
  marginBottom: "48px",
  padding: "0 20px 0 20px",

  variants: {
    isVisible: {
      false: {
        display: "none",
      },
      true: {
        display: "contents",
      },
    },
  },
});

const ShoppingCartInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginRight: "12px",
  cursor: "pointer",
});

const ShoppingCartContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  "& h3": {
    margin: 0,
    padding: 0,
    color: "white",
    fontWeight: 600,
    "@mobile": {
      display: "none",
    },
  },
  "& p": {
    margin: 0,
    padding: 0,
    color: "gray",
  },
});

const ShoppingCartIconContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

const StyledLink = styled("h1", {
  cursor: "pointer",
  color: "white",
});

export {
  ButtonsWrapper,
  AppHeaderWrapper,
  StyledLink,
  ShoppingCartInfo,
  ShoppingCartContainer,
  ShoppingCartIconContainer,
};
