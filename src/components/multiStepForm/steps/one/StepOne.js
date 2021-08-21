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

function StepOne(props) {
  const { t } = useTranslation();

  return (
    <div>
      <FormTitle> {t("choose_how_to_help")}</FormTitle>
    </div>
  );
}

export default StepOne;
