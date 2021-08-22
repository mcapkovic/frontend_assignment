import React from "react";
import { StyledFooter, Logo, Link } from "./styles";
import { FullLogo } from "../../logos";
import Section from "./Section";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <Logo>
        <FullLogo />
      </Logo>
      <Section title={t("foundation_name")}>
        <Link>{t("about")}</Link>
        <Link> {t("how_to")}</Link>
        <Link>{t("contact")}</Link>
      </Section>
      <Section title={t("foundation_name")}>{t("lorem_ipsum")}</Section>
      <Section title={t("foundation_name")}>{t("lorem_ipsum")}</Section>
    </StyledFooter>
  );
}

export default Footer;
