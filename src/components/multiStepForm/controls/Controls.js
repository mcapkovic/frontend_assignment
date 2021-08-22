import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button, ButtonPrimary } from "../../common/";
import { StyledControls, Spacer } from "./styles";
import { formShareData } from "../formSlice";

function Controls(props) {
  const { goBack, goNext, currentStep, totalSteps } = props;
  const { t } = useTranslation();
  const canSubmit = useSelector(formShareData);

  return (
    <StyledControls>
      {currentStep > 1 && (
        <Button type="button" onClick={goBack}>
          {t("back")}
        </Button>
      )}
      <Spacer />
      {currentStep < totalSteps && (
        <ButtonPrimary type="button" onClick={goNext}>
          {t("continue")}
        </ButtonPrimary>
      )}
      {currentStep === totalSteps && (
        <ButtonPrimary type="submit" disabled={!canSubmit}>
          {t("submit_form")}
        </ButtonPrimary>
      )}
    </StyledControls>
  );
}

Controls.propTypes = {
  goBack: PropTypes.func,
  goNext: PropTypes.func,
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
};

export default Controls;
