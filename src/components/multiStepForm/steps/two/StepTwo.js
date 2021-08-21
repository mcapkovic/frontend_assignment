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
import { FormTitle } from "../../common/styles";

function StepTwo(props) {
  const { t } = useTranslation();

  return (
    <div>
      <FormTitle> {t("fill_info")}</FormTitle>
    </div>
  );
}

export default StepTwo;
