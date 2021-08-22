import React from "react";
import PropTypes from "prop-types";
import {
  EditableRadio,
  LabelWithUnderline,
  Dot,
  Underline,
  After,
  Spacer,
  CustomInput,
} from "./styles";

function RadioInputEditable(props) {
  const { children, id, after, value, onChange, defaultValue, ...otherProps } =
    props;
  const inputRef = React.useRef();
  const isAutofocusDisabled = React.useRef(false);
  const [localValue, setLocalValue] = React.useState(defaultValue || "");
  const currentValue = value === undefined ? localValue : value;

  function disableAutofocus(e) {
    if (!e.shiftKey) return;
    if (!e.keyCode) return;
    isAutofocusDisabled.current = true;
  }

  function focusInput() {
    if (!inputRef.current) return;
    if (isAutofocusDisabled.current) {
      isAutofocusDisabled.current = false;
      return;
    }
    inputRef.current.focus();
  }

  function handleCustomInputChange(e) {
    setLocalValue(e.target.value);
    if (onChange) onChange(e);
  }

  return (
    <EditableRadio>
      <Dot
        {...otherProps}
        id={id}
        value={value}
        onFocus={focusInput}
        onChange={onChange}
      />
      <LabelWithUnderline htmlFor={id}>
        <Underline>
          {currentValue ? currentValue : <Spacer>0</Spacer>}
        </Underline>
        {after && <After>{after}</After>}
      </LabelWithUnderline>
      <CustomInput
        ref={inputRef}
        onKeyDown={disableAutofocus}
        value={currentValue}
        onChange={handleCustomInputChange}
        tabIndex="-1"
      />
    </EditableRadio>
  );
}

RadioInputEditable.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  after: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default RadioInputEditable;
