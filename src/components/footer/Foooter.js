import React from "react";
import { StyledFooter, Logo, Link } from "./styles";
import { FullLogo } from "../../logos";
import Section from "./Section";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.";

function Footer(props) {
  return (
    <StyledFooter>
      <Logo>
        <FullLogo />
      </Logo>
      <Section title="Nadácia Good boy">
        <Link>O projekte</Link>
        <Link>Ako na to</Link>
        <Link>Kontakt</Link>
      </Section>
      <Section title="Nadácia Good boy">{TEXT}</Section>
      <Section title="Nadácia Good boy">{TEXT}</Section>
    </StyledFooter>
  );
}

export default Footer;
