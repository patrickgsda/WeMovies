import { styled } from "../stitches";
import CardMui from "@mui/material/Card";

const Paragraph = styled("p", {
  fontWeight: "bold",
  padding: 0,
  margin: 2,

  variants: {
    size: {
      smaller: {
        fontSize: "12px",
        lineHeight: "16.34px",
      },
      smallerFontWeightAltered: {
        fontSize: "12px",
        lineHeight: "16.34px",
        fontWeight: "400",
        marginRight: "36px",
      },
      small: {
        fontSize: "14px",
        lineHeight: "19.07px",
      },
      medium: {
        fontSize: "16px",
        lineHeight: "21.79px",
      },
      mediumX: {
        fontSize: "20px",
        lineHeight: "27.24px",
      },
      large: {
        fontSize: "24px",
        lineHeight: "33px",
      },
    },
    color: {
      black: {
        color: "black",
      },
      white: {
        color: "white",
      },
      gray: {
        color: " #999999",
      },
    },
    device: {
      mobile: {
        "@mobile": {
          display: "none",
        },
      }
    }
  },
});

const Card = styled(CardMui, {
  padding: "24px",
  margin: "8px",
  maxWidth: "950px",
  display: "flex",
  flexDirection: "column",
  height: "100%",

  variants: {
    
  }
});

export { Paragraph, Card };
