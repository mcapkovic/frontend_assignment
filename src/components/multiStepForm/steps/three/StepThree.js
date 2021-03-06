import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Checkbox } from "../../../common";
import { Step, Summary } from "./styles";
import { DataSummary } from "../../common";
import { shelterForm, updateShareData } from "../../formSlice";

function StepThree(props) {
  const { shelters } = props;
  const { t } = useTranslation();
  const state = useSelector(shelterForm);
  const dispatch = useDispatch();
  const shelterName =
    shelters.find((element) => element.id === state.shelterID) || {};

  return (
    <Step>
      <Summary>
        <DataSummary
          label={t("form_of_help")}
          data={
            state.donationMode === "single"
              ? t("specific_shelter_help")
              : t("general_shelter_help")
          }
        />
        {shelterName.name && (
          <DataSummary
            label={t("my_preffered_shelter")}
            data={shelterName.name}
          />
        )}
        <DataSummary label={t("help_amount")} data={`${state.value} €`} />
        <DataSummary
          label={t("name_and_surname")}
          data={`${state.firstName} ${state.lastName}`}
        />
        {state.email && (
          <DataSummary label={t("emai_address")} data={state.email} />
        )}
        {state.phone && (
          <DataSummary label={t("phone_number")} data={state.phone} />
        )}
      </Summary>
      <Checkbox
        id="chcbx_agree"
        label={t("personal_data_agreement")}
        onChange={(e) => dispatch(updateShareData(e.target.checked))}
        checked={state.shareData}
      />
    </Step>
  );
}

StepThree.propTypes = {
  shelters: PropTypes.array,
};

export default StepThree;
