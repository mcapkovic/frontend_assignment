import React from "react";
import PropTypes from "prop-types";
import {
  EditableRadio,
  Label,
  Dot,
  Underline,
  After,
  Spacer,
  CustomInput,
} from "./styles";

function RadioInputEditable(props) {
  const { children, id, after, value, ...otherProps } = props;
  const inputRef = React.useRef();
  const isAutofocusDisabled = React.useRef(false);
  const [localValue, setLocalValue] = React.useState(value || "");

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

  return (
    <EditableRadio>
      <Dot {...otherProps} id={id} value={value} onFocus={focusInput} />
      <Label htmlFor={id}>
        <Underline>{localValue ? localValue : <Spacer>0</Spacer>}</Underline>
        {after && <After>{after}</After>}
      </Label>
      <CustomInput
        ref={inputRef}
        onKeyDown={disableAutofocus}
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
      />
    </EditableRadio>
  );
}

RadioInputEditable.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default RadioInputEditable;
