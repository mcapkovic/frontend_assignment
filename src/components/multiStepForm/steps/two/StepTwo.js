import React from "react";
import { useTranslation } from "react-i18next";
import { Input, Label } from "../../../common";
// import {  } from "./styles";
import { FormTitle } from "../../common";

function StepTwo(props) {
  const { t } = useTranslation();

  return (
    <div>
      <FormTitle> {t("fill_info")}</FormTitle>
      <Label label={t("about_you")} />
      <Input label={t("name")} placeholder={t("add_name")} />
      <Input label={t("surname")} placeholder={t("add_surname")} />
      <Input label={t("emai_address")} placeholder={t("add_email")} />
      <Input label={t("phone_number")} />
    </div>
  );
}

export default StepTwo;
