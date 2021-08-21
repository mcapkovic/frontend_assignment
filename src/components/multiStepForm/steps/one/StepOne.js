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
  Label,
} from "../../../common";
import { Step, Item } from "./styles";
import AmountPicker from "./AmountPicker";
import DonationButtonGroup from "./donationButtonGroup/DonationButtonGroup";
function StepOne(props) {
  const { t } = useTranslation();
  const [isSingleShelter, setIsSingleShelter] = React.useState(false);

  return (
    <Step>
      <DonationButtonGroup
        isSingleShelter={isSingleShelter}
        setIsSingleShelter={setIsSingleShelter}
      />

      <Item>
        {isSingleShelter && (
          <>
            <Label label={t("about_you")} isRequiredLabel={t("optional")} />
            <Dropdown
              label={t("shelter")}
              placeholder={t("choose_shelter")}
              items={["1x", "2x", "3x", "4x or more"]}
            />
          </>
        )}
      </Item>

      <div>
        <Label label={t("donate_amount")} />
        <AmountPicker />
      </div>
    </Step>
  );
}

export default StepOne;
