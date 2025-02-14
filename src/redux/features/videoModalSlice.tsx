 
import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  isModalOpen: boolean;
}

const initialState: modalState = {
  isModalOpen: false,
};

const videoModalSlice = createSlice({
  name: "videoModal",
  initialState,
  reducers: {
    toggleModalOpen: (state) => {
      state.isModalOpen = true;
    },
    toggleModaClose: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { toggleModalOpen, toggleModaClose } = videoModalSlice.actions;
export default videoModalSlice.reducer;
