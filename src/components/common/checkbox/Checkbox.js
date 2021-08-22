import React from "react";
import PropTypes from "prop-types";
import {
  StyledCheckbox,
  Check,
  Label,
  CustomCheckbox,
  CheckPath,
} from "./styles";

function Checkbox(props) {
  const { label, id, checked, onChange, ...otherProps } = props;
  const [localChecked, setLocalChecked] = React.useState(!!checked);

  const currentCheckedValue = checked === undefined ? localChecked : checked;

  function handleChange(e) {
    const newValue = e.target.checked;
    setLocalChecked(newValue);
    if (onChange) onChange(e);
  }

  return (
    <StyledCheckbox>
      <Check
        {...otherProps}
        checked={currentCheckedValue}
        id={id}
        onChange={handleChange}
      />
      <CustomCheckbox htmlFor={id}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
        >
          <CheckPath
            d="M4.5 11L10 16.5L19.5 7"
            initial={false}
            animate={{ pathLength: currentCheckedValue ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 800, damping: 80 }}
          />
        </svg>
      </CustomCheckbox>
      <Label htmlFor={id}> {label}</Label>
    </StyledCheckbox>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
