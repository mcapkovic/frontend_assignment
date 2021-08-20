import React from "react";
import { StyledSection, SectionTitle } from "./styles";

function Section(props) {
  const { children } = props;
  return (
    <StyledSection>
      <SectionTitle />
      {children}
    </StyledSection>
  );
}

export default Section;
