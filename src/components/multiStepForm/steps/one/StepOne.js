import React from "react";
// import { Instagram, Facebook } from "../../../icons";
import { useTranslation } from "react-i18next";
import { Label } from "../../../common";
import { Step } from "./styles";
import AmountPicker from "./AmountPicker";
import DonationButtonGroup from "./donationButtonGroup/DonationButtonGroup";
import DropdownItem from "./dropdownItem/DropdownItem";

function StepOne(props) {
  const { t } = useTranslation();

  return (
    <Step>
      <DonationButtonGroup />
      <DropdownItem />
      <div>
        <Label label={t("donate_amount")} />
        <AmountPicker />
      </div>
    </Step>
  );
}

export default StepOne;
