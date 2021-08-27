import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  updateShelterId,
  shelterForm,
} from "../../../formSlice";
import { Dropdown, Label } from "../../../../common";
import { Item } from "./styles";

function DropdownItem(props) {
  const { data } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { shelterID, donationMode } = useSelector(shelterForm);
  const isRequired = donationMode !== "all";

  function handleShelterChange(value) {
    dispatch(updateShelterId(value.id));
  }

  const selectedShelter = React.useMemo(() => {
    return data.find((element) => element.id === shelterID);
  }, [shelterID, data]);

  return (
    <Item>
      <Label
        label={t("about_you")}
        isRequiredLabel={isRequired ? t("required") : t("optional")}
      />
      <Dropdown
        label={t("shelter")}
        placeholder={t("choose_shelter")}
        items={data}
        onChange={handleShelterChange}
        value={selectedShelter}
      />
    </Item>
  );
}

DropdownItem.propTypes = {
  data: PropTypes.array,
};

export default DropdownItem;
