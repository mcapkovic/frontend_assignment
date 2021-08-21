import React from "react";
import PropTypes from "prop-types";
import { StyledRadio, Label, Dot } from "./styles";

function RadioInput(props) {
  const { children, id, ...otherProps } = props;

  return (
    <StyledRadio>
      <Dot {...otherProps} id={id} />
      <Label htmlFor={id}>{children}</Label>
    </StyledRadio>
  );
}

RadioInput.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default RadioInput;
