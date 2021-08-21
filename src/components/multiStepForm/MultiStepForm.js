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
const SHELTERS = [
  {
    id: 1,
    name: "Žilinský útulok o.z.",
  },
  {
    id: 2,
    name: "Trenčiansky Útulok",
  },
  {
    id: 3,
    name: "HAFKÁČI",
  },
  {
    id: 4,
    name: "Útulok pre psov - TEZAS",
  },
  {
    id: 5,
    name: "Útulok Piešťany",
  },
  {
    id: 6,
    name: "Sloboda zvierat",
  },
  {
    id: 7,
    name: "Útulok Nádej",
  },
  {
    id: 8,
    name: "OZ Tuláčik Brezno",
  },
  {
    id: 9,
    name: "Mestský Útulok - Martin",
  },
  {
    id: 10,
    name: "Šťastný Domov - Happy House",
  },
  {
    id: 11,
    name: "OZ Pes v núdzi",
  },
  {
    id: 12,
    name: "Cerberus",
  },
  {
    id: 13,
    name: "Útulok Levice - OZ Šťastný Domov",
  },
  {
    id: 14,
    name: "Mestský útulok Nové Zámky",
  },
  {
    id: 15,
    name: "Únia vzájomnej pomoci ľudí a psov",
  },
  {
    id: 16,
    name: "OZ OČAMI PSA",
  },
];
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
      {currentStep === 1 && <StepOne shelters={SHELTERS} />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree shelters={SHELTERS}/>}
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
