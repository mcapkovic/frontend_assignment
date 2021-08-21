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
} from "../../common/";
import { StyledControls, Spacer } from "./styles";
// import {  } from "../../common/styles";

function Controls(props) {
  const { goBack, goNext, currentStep, totalSteps } = props;
  const { t } = useTranslation();

  return (
    <StyledControls>
      {currentStep > 1 && <Button onClick={goBack}>{t("back")}</Button>}
      <Spacer />
      {currentStep < totalSteps && (
        <ButtonPrimary onClick={goNext}>{t("continue")}</ButtonPrimary>
      )}
      {currentStep === totalSteps && (
        <ButtonPrimary type="submit">{t("submit_form")}</ButtonPrimary>
      )}
    </StyledControls>
  );
}

export default Controls;
