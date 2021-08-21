import React from "react";
// import { Instagram, Facebook } from "../../../icons";
import { useTranslation } from "react-i18next";
import {
  Button,
  ButtonPrimary,
  Pager,
  Input,
  RadioInput,
  RadioInputEditable,
  Dropdown,
  Checkbox,
} from "../../../common";
// import {  } from "./styles";
import { FormTitle, DataSummary } from "../../common";

function StepThree(props) {
  const { t } = useTranslation();

  return (
    <div>
      <FormTitle> {t("check_your_info")}</FormTitle>

      <DataSummary label={t("form_of_help")} data={"empty"} />
      <DataSummary label={t("my_preffered_shelter")} data={"empty"} />
      <DataSummary label={t("help_amount")} data={"empty"} />
      <DataSummary label={t("name_and_surname")} data={"empty"} />
      <DataSummary label={t("emai_address")} data={"empty"} />
      <DataSummary label={t("phone_number")} data={"empty"} />

      <Checkbox id="chcbx_agree" label={t("personal_data_agreement")} />
    </div>
  );
}

export default StepThree;
