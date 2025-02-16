import { createSlice } from "@reduxjs/toolkit";



const initialState= {
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
