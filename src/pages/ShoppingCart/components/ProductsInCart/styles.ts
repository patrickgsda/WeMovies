import { styled } from "../../../../styles/stitches";
import CardMui from "@mui/material/Card";
import { Button } from "@mui/material";

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
});

const HeaderTitles = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  "@mobile": {
    display: "none",
  },

  "& p:nth-child(1)": {
    marginRight: "34%",
  },

  "& p:nth-child(2)": {
    marginRight: "9%",
  },

  "& p:nth-child(3)": {
    marginRight: "2%",
  },

  "& p:nth-child(4)": {
    marginLeft: "12%",
  },
});

const Card = styled(CardMui, {
  padding: "24px",
  margin: "8px",
  maxWidth: "950px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  "@mobile": {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "716px",
    "& hr": {
      flexGrow: 1,
    },
  },
});

const ContainerImg = styled("div", {
  display: "flex",
  justifyContent: "center",
  height: "89px",
  marginRight: "15%",

  "@mobile": {
    marginRight: "5%",
  },
});

const ContainerInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",

  variants: {
    device: {
      mobile: {
        "@mobile": {
          display: "none",
        },
      },
    },
  },
});

const RowProduct = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "40%",
  marginBottom: "21px",
  marginTop: "21px",
  "@mobile": {
    width: "100%",
  },
});

const RowQuantity = styled("div", {
  display: "flex",

  "& div": {
    marginLeft: "5%",
  },

  "@mobile": {
    visibility: "hidden",
  },
});

const RowSubTotal = styled("div", {
  display: "flex",
  alignItems: "center",

  "@mobile": {
    visibility: "hidden",
  },
});

const CardContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const StyledButton = styled(Button, {
  width: "235.42px",
  height: "40px",
  backgroundColor: "#009EDD !important",
  "@mobile": {
    width: "100%",
  },
});

const RowTrash = styled("div", {
  display: "flex",
  alignItems: "center",
  marginLeft: "11%",

  "@mobile": {
    visibility: "hidden",
  },
});

const FooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "21px",

  "& p:nth-child(2)": {
    flexGrow: 1,
  },

  "& p:nth-child(3)": {
    marginRight: "3%",
  },

  "@mobile": {
    display: "flex",
    flexDirection: "column-reverse",
    "& p:nth-child(3)": {
      order: "1",
    },
  },
});

const ContainerTitleAndPriceAndRemove = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  visibility: "hidden",

  "@mobile": {
    visibility: "visible",
  },

  "& p:nth-child(1)": {
    width: "125px",
    textAlign: "center",
  },

  "& p:nth-child(2)": {
    marginRight: "10px",
  },
});

const ContainerQuantityAndSubtotal = styled("div", {
  display: "flex",
  alignItems: "center",
  visibility: "hidden",

  "@mobile": {
    visibility: "visible",
  },
  "& div:nth-child(2)": {
    marginLeft: "19%",
  },
});

const ContainerSubTotal = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ContainerTotal = styled("div", {
  display: "none",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "15px",

  "@mobile": {
    display: "flex",
  },

  "& p:nth-child(2)": {
    marginLeft: "100px",
    marginRight: "30px",
  },
});

export {
  Container,
  HeaderTitles,
  ContainerImg,
  ContainerInfos,
  Card,
  CardContent,
  RowProduct,
  RowQuantity,
  RowSubTotal,
  StyledButton,
  RowTrash,
  FooterContainer,
  ContainerTitleAndPriceAndRemove,
  ContainerQuantityAndSubtotal,
  ContainerSubTotal,
  ContainerTotal,
};
