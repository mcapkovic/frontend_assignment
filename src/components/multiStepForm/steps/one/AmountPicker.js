import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RadioInput, RadioInputEditable } from "../../../common";
import { StyledPicker } from "./styles";
import { formAmount, updateAmount } from "../../formSlice";

const OPTIONS = [5, 10, 20, 30, 50, 100];

function getIsValueCustom(value) {
  if (value === "") return true;
  if (!Number(value)) return false;
  if (OPTIONS.includes(value)) return false;
  return true;
}

function AmountPicker(props) {
  const dispatch = useDispatch();
  const amount = useSelector(formAmount);
  const isValueCustom = getIsValueCustom(amount);
  const customAmount = React.useRef(isValueCustom ? amount : "");

  function handleChange(e) {
    const newValue = e.target.value;
    dispatch(updateAmount(Number(newValue)));
  }

  function handleCustomChange(e) {
    const newValue = e.target.value;
    if (isNaN(newValue)) return;
    customAmount.current = newValue;
    dispatch(updateAmount(newValue));
  }

  return (
    <StyledPicker>
      <RadioInput
        id="value_5"
        name="donation"
        value={OPTIONS[0]}
        checked={amount === OPTIONS[0]}
        onChange={handleChange}
      >
        {`${OPTIONS[0]} €`}
      </RadioInput>
      <RadioInput
        id="value_10"
        name="donation"
        value={OPTIONS[1]}
        checked={amount === OPTIONS[1]}
        onChange={handleChange}
      >
        {`${OPTIONS[1]} €`}
      </RadioInput>
      <RadioInput
        id="value_20"
        name="donation"
        value={OPTIONS[2]}
        checked={amount === OPTIONS[2]}
        onChange={handleChange}
      >
        {`${OPTIONS[2]} €`}
      </RadioInput>
      <RadioInput
        id="value_30"
        name="donation"
        value={OPTIONS[3]}
        checked={amount === OPTIONS[3]}
        onChange={handleChange}
      >
        {`${OPTIONS[3]} €`}
      </RadioInput>
      <RadioInput
        id="value_50"
        name="donation"
        value={OPTIONS[4]}
        checked={amount === OPTIONS[4]}
        onChange={handleChange}
      >
        {`${OPTIONS[4]} €`}
      </RadioInput>
      <RadioInput
        id="value_100"
        name="donation"
        value={OPTIONS[5]}
        checked={amount === OPTIONS[5]}
        onChange={handleChange}
      >
        {`${OPTIONS[5]} €`}
      </RadioInput>
      <RadioInputEditable
        id="value_custom"
        name="donation"
        value={isValueCustom ? amount : customAmount.current}
        after="€"
        onChange={handleCustomChange}
        checked={isValueCustom}
      />
    </StyledPicker>
  );
}

export default AmountPicker;
