import { styled } from "../../../../styles/stitches";
import CardMui from "@mui/material/Card";
import { Button } from "@mui/material";

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
});

const Card = styled(CardMui, {
  width: "309px",
  padding: "8px",
  margin: "8px",
});

const ContainerImg = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "188px",
  marginBottom: "7px",
});

const ContainerInfos = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

const StyledButton = styled(Button, {
  width: "100%",
  height: "40px",
  backgroundColor: "#009EDD !important",
  color: "white !important",

  variants: {
    backgroundColor: {
      green: {
        backgroundColor: "#039B00 !important",
      },
    },
  },
});

const ContainerButton = styled("div", {
  marginTop: "8px",
});

const ButtonContent = styled("div", {
  display: "flex",
  alignItems: "center",

  "& svg": {
    marginRight: "5px",
  },
});

export {
  Container,
  ContainerImg,
  ContainerInfos,
  Card,
  StyledButton,
  ContainerButton,
  ButtonContent,
};
