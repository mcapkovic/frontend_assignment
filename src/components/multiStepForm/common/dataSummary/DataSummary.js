import React from "react";

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

export default DataSummary;
