import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { formDonationMode, updateDonationMode } from "../../../formSlice";
import {
  ButtonGroup,
  ButtonEnd,
  ButtonStart,
  IconCircle,
  Label,
} from "./styles";
import { Paw, Wallet } from "../../../../../icons";

function DonationButtonGroup() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const mode = useSelector(formDonationMode);

  return (
    <ButtonGroup>
      <ButtonStart
        type="button"
        selected={mode === "single"}
        onClick={() => dispatch(updateDonationMode("single"))}
      >
        <IconCircle>
          <Wallet />
        </IconCircle>
        <Label>{t("specific_shelter_help")}</Label>
      </ButtonStart>
      <ButtonEnd
        type="button"
        selected={mode === "all"}
        onClick={() => dispatch(updateDonationMode("all"))}
      >
        <IconCircle>
          <Paw />
        </IconCircle>
        <Label>{t("general_shelter_help")}</Label>
      </ButtonEnd>
    </ButtonGroup>
  );
}

export default DonationButtonGroup;
