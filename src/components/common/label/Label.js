import React from "react";
import PropTypes from "prop-types";
import { IsRequiredLabel, MainLabel, Spacer, StyledLabel } from "./styles";

function Label(props) {
  const { label, id, isRequiredLabel } = props;

  return (
    <StyledLabel>
      {label && <MainLabel htmlFor={id}>{label}</MainLabel>}
      <Spacer />
      {isRequiredLabel && <IsRequiredLabel>{isRequiredLabel}</IsRequiredLabel>}
    </StyledLabel>
  );
}

Label.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  isRequiredLabel: PropTypes.string,
};

export default Label;
