import React from "react";
import { useTranslation } from "react-i18next";
import { Pager } from "../common";
import { StyledMultiStepForm, SubmitMessage } from "./styles";
import StepOne from "./steps/one/StepOne";
import StepTwo from "./steps/two/StepTwo";
import StepThree from "./steps/three/StepThree";
import Controls from "./controls/Controls";
import { FormTitle } from "./common";
import useFormValidator from "./hooks/useFormValidator";
import { ErrorsLog } from "../common";
import useFetch from "../../hooks/useFetch";
import useFormPost from "./hooks/useFormPost";

const TITLES = ["choose_how_to_help", "fill_info", "check_your_info"];

const API_SHELTERS =
  "https://frontend-assignment-api.goodrequest.com/api/v1/shelters";
const API_POST =
  "https://frontend-assignment-api.goodrequest.com/api/v1/shelters/contribute";

function MultiStepForm() {
  const [currentStep, setCuttenStep] = React.useState(1);
  const { t } = useTranslation();
  const { errors: formErrors, validateForm } = useFormValidator();
  const { post, errors: postErrors, succes } = useFormPost(API_POST);
  const { data } = useFetch(API_SHELTERS);
  const shelters = data ? data.shelters : [];

  function nextStep() {
    validateForm(currentStep, () => {
      setCuttenStep(currentStep + 1);
    });
  }

  function prevStep() {
    validateForm(currentStep, () => {
      setCuttenStep(currentStep - 1);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    post();
  }

  if (succes) return <SubmitMessage>{succes[0].message}</SubmitMessage>;
  return (
    <StyledMultiStepForm onSubmit={handleSubmit}>
      <Pager curentPage={currentStep} total={3} margin="0 0 40px 0" />
      <FormTitle> {t(TITLES[currentStep - 1])}</FormTitle>
      {currentStep === 1 && <StepOne shelters={shelters} />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree shelters={shelters} />}
      {formErrors.length > 0 && <ErrorsLog errors={formErrors} />}
      {postErrors && <ErrorsLog errors={[t("post_error")]} />}

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
