// hostSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const host = createSlice({
  name: 'hostAuth',
  initialState: {
    selectedCategory: null,
    selectedType: null,
    selectedFeature: [],
    address: [],
    selectedLocation: null,
    image: [],
    selectedBasics: [],
  },
  reducers: {
   hostDatas: (state, action) => {
      state.selectedCategory= action.payload.selectedCategory;
      state.selectedType = action.payload.selectedType;
      state.selectedFeature = action.payload.selectedFeature;
      state.address = action.payload.address;
      state.selectedLocation = action.payload.selectedLocation;
      state.image = action.payload.image;
      state.selectedBasics= action.payload.selectedBasics;
    }
  },
});

export const {hostDatas} = host.actions;

export default host.reducer;
