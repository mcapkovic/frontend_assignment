import React from "react";
import PropTypes from "prop-types";
import { StyledDataSummary, Label, Data } from "./styles";

function DataSummary(props) {
  const { label, data } = props;
  return (
    <StyledDataSummary>
      {label && <Label>{label}</Label>}
      {data && <Data>{data}</Data>}
    </StyledDataSummary>
  );
}

DataSummary.propTypes = {
  data: PropTypes.string,
  label: PropTypes.string,
};

export default DataSummary;
