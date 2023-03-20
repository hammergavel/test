import { createSlice } from "@reduxjs/toolkit";

const UIMyLeaguesSlice = createSlice({
  name: "myleagues",
  initialState: {
    selectedButton: {
      selectedText: "upcoming",
      selectedBtns: [true, false, false],
    },
  },
  reducers: {
    setSelectedButton(state, action) {
      state.selectedButton = action.payload;
    },
  },
});

export const UIMyLeaguesActions = UIMyLeaguesSlice.actions;
export default UIMyLeaguesSlice;
