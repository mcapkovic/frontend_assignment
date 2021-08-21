import React from "react";
import { useTranslation } from "react-i18next";
import {
  ButtonGroup,
  ButtonEnd,
  ButtonStart,
  IconCircle,
  Label,
} from "./styles";
import { Paw, Wallet } from "../../../../../icons";

function DonationButtonGroup(props) {
  const { isSingleShelter, setIsSingleShelter } = props;
  const { t } = useTranslation();
  const [all, setAll] = React.useState(true);

  return (
    <ButtonGroup>
      <ButtonStart selected={isSingleShelter} onClick={() => setIsSingleShelter(true)}>
        <IconCircle>
          <Wallet />
        </IconCircle>
        <Label>{t("specific_shelter_help")}</Label>
      </ButtonStart>
      <ButtonEnd selected={!isSingleShelter} onClick={() => setIsSingleShelter(false)}>
        <IconCircle>
          <Paw />
        </IconCircle>
        <Label>{t("general_shelter_help")}</Label>
      </ButtonEnd>
    </ButtonGroup>
  );
}

export default DonationButtonGroup;
