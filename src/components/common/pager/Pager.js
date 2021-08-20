import React from "react";
import PropTypes from "prop-types";
import { StyledPager, Page } from "./styles";

function Pager(props) {
  const { curentPage = 1, total = 1 } = props;

  return (
    <StyledPager>
      {[...Array(total)].map((_, index) => (
        <Page selected={curentPage === index + 1} key={index} />
      ))}
    </StyledPager>
  );
}

Pager.propTypes = {
  curentPage: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
};

export default Pager;
