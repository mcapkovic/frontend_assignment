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
  const { label, data } = props;
  const { t } = useTranslation();

  const [all, setAll] = React.useState(true);

  return (
    <ButtonGroup>
      <ButtonStart selected={!all} onClick={() => setAll(false)}>
        <IconCircle>
          <Wallet />
        </IconCircle>
        <Label>{t("specific_shelter_help")}</Label>
      </ButtonStart>
      <ButtonEnd selected={all} onClick={() => setAll(true)}>
        <IconCircle>
          <Paw />
        </IconCircle>
        <Label>{t("general_shelter_help")}</Label>
      </ButtonEnd>
    </ButtonGroup>
  );
}

export default DonationButtonGroup;
