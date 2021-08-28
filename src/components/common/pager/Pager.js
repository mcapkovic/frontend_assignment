import React from "react";
import PropTypes from "prop-types";
import { StyledPager, Page } from "./styles";

function Pager(props) {
  const { curentPage = 1, total = 1, margin } = props;

  return (
    <StyledPager margin={margin}>
      {[...Array(total)].map((_, index) => (
        <Page
          selected={curentPage === index + 1}
          key={index}
          animate={{ width: curentPage === index + 1 ? 45 : 21 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </StyledPager>
  );
}

Pager.propTypes = {
  curentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  margin: PropTypes.string,
};

export default Pager;
