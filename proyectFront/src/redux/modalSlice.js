import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditModalOpen: false,
  editModalTaskId: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
      state.editModalTaskId = action.payload;
    },
    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.editModalTaskId = null;
    },
  },
});

export const { openEditModal, closeEditModal } = modalSlice.actions;

export default modalSlice.reducer;
