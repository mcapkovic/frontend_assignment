import React from "react";
import { StyledFooter, Logo } from "./styles";
import { FullLogo } from "../../logos";
import Section from "./Section";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.";

function Footer(props) {
  return (
    <StyledFooter>
      <Logo> <FullLogo /></Logo>
      <Section>{TEXT}</Section>
      <Section>{TEXT}</Section>
      <Section>{TEXT}</Section>
    </StyledFooter>
  );
}

export default Footer;
