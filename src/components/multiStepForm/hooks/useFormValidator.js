import React from "react";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { shelterForm } from "../formSlice";
import i18n from "i18next";

const firstName = yup
  .string()
  .min(2, () => i18n.t("string_min", { value: 2, field: i18n.t("name") }))
  .max(20, () => i18n.t("string_max", { value: 20, field: i18n.t("name") }));
const lastName = yup
  .string()
  .min(2, () => i18n.t("string_min", { value: 2, field: i18n.t("surname") }))
  .max(30, () => i18n.t("string_max", { value: 30, field: i18n.t("surname") }))
  .required(() => i18n.t("required_field", { field: i18n.t("surname") }));
const email = yup
  .string()
  .email()
  .required(() => i18n.t("required_field", { field: i18n.t("emai_address") }));
const phone = yup.string();
const value = yup
  .number()
  .typeError(() => i18n.t("required_field", { field: i18n.t("help_amount") }))
  .required(() => i18n.t("required_field", { field: i18n.t("help_amount") }));
const shelterID = yup.number().test(
  "shelterID-validation",
  () => i18n.t("required_field", { field: i18n.t("shelter") }),
  (value, context) => {
    if (context.parent.donationMode === "all") return true;
    if (value >= 0) return true;
    return false;
  }
);

// each step has a separate validation schema
let schema = [
  yup.object().shape({
    value,
    shelterID,
  }),
  yup.object().shape({
    firstName,
    lastName,
    email,
    phone,
  }),
  yup.object().shape({
    firstName,
    lastName,
    email,
    phone,
    value,
    shelterID,
  }),
];

function useFormValidator() {
  const [errors, setErrors] = React.useState([]);
  const state = useSelector(shelterForm);

  function validateForm(step, callback) {
    schema[step - 1]
      .validate(state, { abortEarly: false })
      .then(() => {
        setErrors([]);
        callback();
      })
      .catch(function (err) {
        setErrors(err.errors);
      });
  }
  return { errors, validateForm };
}

export default useFormValidator;
