import React from "react";
import { RadioInput, RadioInputEditable } from "../../../common";
// import {  } from "./styles";

function AmountPicker(props) {
  return (
    <div>
      <RadioInput id="value_5" name="donation" value="5">
        5 $
      </RadioInput>
      <RadioInput id="value_10" name="donation" value="10">
        10 $
      </RadioInput>
      <RadioInput id="value_20" name="donation" value="20">
        20 $
      </RadioInput>
      <RadioInput id="value_30" name="donation" value="30">
        30 $
      </RadioInput>
      <RadioInput id="value_50" name="donation" value="50">
        50 $
      </RadioInput>
      <RadioInput id="value_100" name="donation" value="100">
        100 $
      </RadioInput>
      <RadioInputEditable
        id="value_custom"
        name="donation"
        value=""
        after="$"
      />
    </div>
  );
}

export default AmountPicker;
