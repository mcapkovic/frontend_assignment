import React from "react";
import { useTranslation } from "react-i18next";
import { Pager } from "../common";
import { StyledMultiStepForm } from "./styles";
import StepOne from "./steps/one/StepOne";
import StepTwo from "./steps/two/StepTwo";
import StepThree from "./steps/three/StepThree";
import Controls from "./controls/Controls";
import { FormTitle } from "./common";

const TITLES = ["choose_how_to_help", "fill_info", "check_your_info"];

function MultiStepForm(props) {
  const [currentStep, setCuttenStep] = React.useState(1);
  const { t } = useTranslation();

  function nextStep() {
    setCuttenStep(currentStep + 1);
  }

  function prevStep() {
    setCuttenStep(currentStep - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <StyledMultiStepForm onSubmit={handleSubmit}>
      <Pager curentPage={currentStep} total={3} margin="0 0 40px 0" />
      <FormTitle> {t(TITLES[currentStep - 1])}</FormTitle>
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}
      <Controls
        goNext={nextStep}
        goBack={prevStep}
        currentStep={currentStep}
        totalSteps={3}
      />
    </StyledMultiStepForm>
  );
}

export default MultiStepForm;
