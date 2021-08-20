import React from "react";
import { StyledHeader, SocialMedia, Name } from "./styles";
import { Instagram, Facebook } from "../icons";

function Header(props) {
  return (
    <StyledHeader>
      <Name>Nadacia good boy</Name>
      <SocialMedia>
        <Instagram />
        <Facebook />
      </SocialMedia>
    </StyledHeader>
  );
}

export default Header;
