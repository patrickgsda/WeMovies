import { Button } from "@mui/material";
import { styled } from "../../styles/stitches";

const CardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& img": {
    marginTop: "3.5%",
    marginBottom: "8%",
  },
});

const StyledButton = styled(Button, {
  width: "180px",
  height: "40px",
  backgroundColor: "#009EDD !important",
});

export { CardContent, StyledButton };
