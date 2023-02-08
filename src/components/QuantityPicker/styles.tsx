import { styled } from "../../styles/stitches";

const QuantityPickerWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  ":nth-child(1)": {
    outline: "0 !important",
  },
});

const StyledInput = styled("input", {
  fontWeight: "$medium",
  fontSize: "$2",
  width: "44px",
  height: "22px",
  borderRadius: "4px",
  border: "1px solid #D9D9D9",
  paddingLeft: "14px",
});

export { QuantityPickerWrapper, StyledInput };
