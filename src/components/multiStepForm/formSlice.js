import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@goodrequest.com",
  phone: "0911111111",
  value: 50,
  shelterID: 1,
  donationMode: 'all',
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
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
  },
});

export const { updateField, updateAmount, updateDonationMode, updateShelterId } = formSlice.actions;

export const shelterForm = (state) => state.shelterForm;
export const formAmount = (state) => state.shelterForm.value;
export const formDonationMode = (state) => state.shelterForm.donationMode;
export const formShelterId = (state) => state.shelterForm.shelterID;

export default formSlice.reducer;
