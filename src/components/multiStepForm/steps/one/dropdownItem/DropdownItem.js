import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { formShelterId, updateShelterId } from "../../../formSlice";
import { Dropdown, Label } from "../../../../common";
import { Item } from "./styles";

function DropdownItem(props) {
  const { data } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const shelterId = useSelector(formShelterId);

  function handleShelterChange(value) {
    dispatch(updateShelterId(value.id));
  }

  const selectedShelter = React.useMemo(() => {
    return data.find((element) => element.id === shelterId);
  }, [shelterId, data]);

  return (
    <Item>
      <Label label={t("about_you")} isRequiredLabel={t("optional")} />
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

export default DropdownItem;
