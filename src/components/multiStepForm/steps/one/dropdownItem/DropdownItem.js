import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { formShelterId, updateShelterId } from "../../../formSlice";
import { Dropdown, Label } from "../../../../common";
import { Item } from "./styles";

const data = [
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

function DropdownItem(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const shelterId = useSelector(formShelterId);

  function handleShelterChange(value) {
    dispatch(updateShelterId(value.id));
  }

  const selectedShelter = React.useMemo(() => {
    return data.find((element) => element.id === shelterId);
  }, [shelterId]);

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
