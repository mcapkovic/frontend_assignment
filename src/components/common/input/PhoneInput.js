import React from "react";
import PropTypes from "prop-types";
import { AsYouType } from "libphonenumber-js";
import {
  InnerInput,
  Label,
  StyledInput,
  CountryImg,
  PhoneInputWrap,
} from "./styles";

function PhoneInput(props) {
  const { label, id, onChange, defaultCountry = "SK", ...otherProps } = props;
  const country = React.useRef(defaultCountry);
  const formattedValue = React.useRef("");

  function handleChange(e) {
    const asYouType = new AsYouType(defaultCountry);
    asYouType.input(e.target.value);
    if (asYouType && asYouType.country) country.current = asYouType.country;
    if (asYouType && asYouType.formattedOutput)
      formattedValue.current = asYouType.formattedOutput;
    if (onChange) onChange(e);
  }

  function handleBlur(e) {
    if (!formattedValue.current) return;
    e.target.value = formattedValue.current;
    if (onChange) onChange(e);
  }

  return (
    <StyledInput>
      {label && <Label htmlFor={id}>{label}</Label>}
      <PhoneInputWrap>
        <CountryImg
          alt={country.current}
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.current}.svg`}
        />
        <InnerInput
          {...otherProps}
          onChange={handleChange}
          id={id}
          onBlur={handleBlur}
        />
      </PhoneInputWrap>
    </StyledInput>
  );
}

PhoneInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  defaultCountry: PropTypes.string,
};

export default PhoneInput;
