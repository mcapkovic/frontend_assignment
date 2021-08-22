import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  value: 5,
  shelterID: -1,
  donationMode: "all",
  shareData: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    updateAmount: (state, action) => {
      state.value = action.payload;
    },
    updateDonationMode: (state, action) => {
      state.donationMode = action.payload;
    },
    updateShelterId: (state, action) => {
      state.shelterID = action.payload;
    },
    updateShareData: (state, action) => {
      state.shareData = action.payload;
    },
  },
});

export const {
  updateField,
  updateAmount,
  updateDonationMode,
  updateShelterId,
  updateShareData,
} = formSlice.actions;

export const shelterForm = (state) => state.shelterForm;
export const formAmount = (state) => state.shelterForm.value;
export const formDonationMode = (state) => state.shelterForm.donationMode;
export const formShelterId = (state) => state.shelterForm.shelterID;
export const formShareData = (state) => state.shelterForm.shareData;

export default formSlice.reducer;
