import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Checkbox,
} from "../../../common";
import { Step, Summary } from "./styles";
import { DataSummary } from "../../common";
import { shelterForm } from "../../formSlice";

function StepThree(props) {
  const { t } = useTranslation();
  const state = useSelector(shelterForm);

  return (
    <Step>
      <Summary>
        <DataSummary label={t("form_of_help")} data={'state.firstName'} />
        <DataSummary label={t("my_preffered_shelter")} data={state.shelterID} />
        <DataSummary label={t("help_amount")} data={state.value} />
        <DataSummary label={t("name_and_surname")} data={`${state.firstName} ${state.lastName}`} />
        <DataSummary label={t("emai_address")} data={state.email} />
        <DataSummary label={t("phone_number")} data={state.phone} />
      </Summary>
      <Checkbox id="chcbx_agree" label={t("personal_data_agreement")} />
    </Step>
  );
}

export default StepThree;
