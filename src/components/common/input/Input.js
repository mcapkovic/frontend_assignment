import React from "react";
import PropTypes from "prop-types";
import { InnerInput, Label, StyledInput } from "./styles";

function Input(props) {
  const { label, id, ...otherProps } = props;

  return (
    <StyledInput>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InnerInput {...otherProps} id={id} />
    </StyledInput>
  );
}

Input.propTypes = {
  //   curentPage: PropTypes.number.isRequired,
  //   children: PropTypes.number.isRequired,
};

export default Input;
