import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../components/multiStepForm/formSlice';

export const store = configureStore({
  reducer: {
    shelterForm: formSlice,
  },
});
