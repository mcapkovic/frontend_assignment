import React from "react";
import { Pager } from "../common";
import { StyledMultiStepForm, Steps } from "./styles";
import StepOne from "./steps/one/StepOne";
import StepTwo from "./steps/two/StepTwo";
import StepThree from "./steps/three/StepThree";
import Controls from "./controls/Controls";
function MultiStepForm(props) {
  const [currentStep, setCuttenStep] = React.useState(1);

  function nextStep() {
    setCuttenStep(currentStep + 1);
  }

  function prevStep() {
    setCuttenStep(currentStep - 1);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('submit')
  }

  return (
    <StyledMultiStepForm onSubmit={handleSubmit}>
      <Pager curentPage={currentStep} total={3} />

      <Steps>
        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
      </Steps>
      <Controls goNext={nextStep} goBack={prevStep} currentStep={currentStep} totalSteps={3} />
    </StyledMultiStepForm>
  );
}

export default MultiStepForm;
