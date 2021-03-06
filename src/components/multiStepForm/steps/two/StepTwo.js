import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Input, Label, PhoneInput } from "../../../common";
import { Step, Inputs } from "./styles";
import { shelterForm, updateField } from "../../formSlice";

function StepTwo() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const state = useSelector(shelterForm);

  function handleChange(e) {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  }

  return (
    <Step>
      <Label label={t("about_you")} />
      <Inputs>
        <Input
          label={t("name")}
          placeholder={t("add_name")}
          value={state.firstName}
          onChange={handleChange}
          name="firstName"
          id='name'
        />
        <Input
          label={t("surname")}
          placeholder={t("add_surname")}
          value={state.lastName}
          onChange={handleChange}
          name="lastName"
          id='surname'
        />
        <Input
          label={t("emai_address")}
          placeholder={t("add_email")}
          value={state.email}
          onChange={handleChange}
          name="email"
          id='email'
        />
        <PhoneInput
          label={t("phone_number")}
          value={state.phone}
          onChange={handleChange}
          name="phone"
          defaultCountry="SK"
          placeholder="+421"
          id='phone'
        />
      </Inputs>
    </Step>
  );
}

export default StepTwo;
