import React from "react";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { shelterForm } from "../formSlice";

// const firstName = yup.string().test(
//   "firstName-validation",
//   () => "name must be empty or between 2 and 20 characters",
//   (value, context) => {
//     if (value === "") return true;
//     if (value.length > 1 && value.length < 21) return true;

//     return false;
//   }
// );

const firstName = yup.string().min(2).max(20);
const lastName = yup.string().min(2).max(30).required();
const email = yup.string().email().required();
const phone = yup.string();
const value = yup.number().required();
const shelterID = yup.number().test(
  "shelterID-validation",
  () => "shelter_is_required",
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
