import React from "react";
import PropTypes from "prop-types";
import { StyledErrors, StyledError } from "./styles";

function ErrorsLog(props) {
  const { errors = [] } = props;
  return (
    <StyledErrors>
      {errors.map((error, index) => (
        <StyledError key={index}>{error}</StyledError>
      ))}
    </StyledErrors>
  );
}

ErrorsLog.propTypes = {
  errors: PropTypes.array,
};

export default ErrorsLog;
