import React from "react";
import { StyledHeader, SocialMedia, Name } from "./styles";
import { Instagram, Facebook } from "../../icons";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <Name>{t("foundation_name2")}</Name>
      <SocialMedia>
        <Instagram />
        <Facebook />
      </SocialMedia>
    </StyledHeader>
  );
}

export default Header;
