import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "../../assets/icons";
import { REGEX_FLOATING_NUMBER } from "../../utils/regex";
import { QuantityPickerWrapper, StyledInput } from "./styles";
import { QuantityPickerProps } from "./types";

const QuantityPicker = ({ value, onChange, css }: QuantityPickerProps) => {
  const initialValue = value.toString();
  const [valuePicker, setValuePicker] = useState<string>(initialValue);
  const DEFAULT_VALUE = "1";

  const formatValue = (valueString: string) =>
    valueString.match(REGEX_FLOATING_NUMBER)![0].replace(/^([0-])([\d])/, "$2");

  const handleSubtractValue = () => {
    const formattedValue = Number(value) - 1;
    onChange(formattedValue);
    return formattedValue.toString();
  };

  const handleAdditionValue = () => {
    const formattedValue = Number(value) + 1;
    onChange(formattedValue);
    return formattedValue.toString();
  };

  const inputOnChange = (event: any) => {
    if (
      (event.key === "Backspace" || event.key === "Delete") &&
      valuePicker === "0"
    ) {
      setValuePicker(" ");
    } else {
      if (event.target.value === "0") {
        setValuePicker(String(value));
      } else {
        const formattedInputValue =
          formatValue(event.target.value) || DEFAULT_VALUE;
        onChange(parseFloat(formattedInputValue));
      }
    }
  };

  useEffect(() => {
    setValuePicker(String(value));
  }, [value]);

  return (
    <QuantityPickerWrapper css={css}>
      <IconButton
        disabled={
          parseFloat(valuePicker) === 1 || valuePicker === DEFAULT_VALUE
        }
        aria-label="minus"
        onClick={handleSubtractValue}
      >
        <MinusIcon />
      </IconButton>
      <StyledInput value={valuePicker} onChange={inputOnChange} />
      <IconButton aria-label="plus" onClick={handleAdditionValue}>
        <PlusIcon />
      </IconButton>
    </QuantityPickerWrapper>
  );
};

export default QuantityPicker;
