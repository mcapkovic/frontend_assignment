import React from "react";
import { useTranslation } from "react-i18next";
import { Input, Label } from "../../../common";
import { Step, Inputs } from "./styles";

function StepTwo(props) {
  const { t } = useTranslation();

  return (
    <Step>
      <Label label={t("about_you")} />
      <Inputs>
        <Input label={t("name")} placeholder={t("add_name")} />
        <Input label={t("surname")} placeholder={t("add_surname")} />
        <Input label={t("emai_address")} placeholder={t("add_email")} />
        <Input label={t("phone_number")} />
      </Inputs>
    </Step>
  );
}

export default StepTwo;
