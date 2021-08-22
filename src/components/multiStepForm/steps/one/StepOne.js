import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Label } from "../../../common";
import { Step } from "./styles";
import AmountPicker from "./AmountPicker";
import DonationButtonGroup from "./donationButtonGroup/DonationButtonGroup";
import DropdownItem from "./dropdownItem/DropdownItem";

function StepOne(props) {
  const { shelters } = props;
  const { t } = useTranslation();

  return (
    <Step>
      <DonationButtonGroup />
      <DropdownItem data={shelters} />
      <div>
        <Label label={t("donate_amount")} />
        <AmountPicker />
      </div>
    </Step>
  );
}

StepOne.propTypes = {
  shelters: PropTypes.array,
};

export default StepOne;
