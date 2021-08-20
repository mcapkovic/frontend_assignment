import React from "react";
import PropTypes from "prop-types";
import { StyledSection, SectionTitle } from "./styles";

function Section(props) {
  const { children, title } = props;
  return (
    <StyledSection>
      {title && <SectionTitle>{title}</SectionTitle>}

      {children}
    </StyledSection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Section;
