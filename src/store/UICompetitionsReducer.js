import { createSlice } from "@reduxjs/toolkit";

const UIcompetitionSlice = createSlice({
  name: "competitionsUI",
  initialState: {
    sportCat: [true, false, false],
    competitionType: { type: "daily", capsuleButton: [true, false] },
  },
  reducers: {
    setSportCat(state, action) {
      state.sportCat = action.payload;
    },
    setCompType(state, action) {
      state.competitionType = action.payload;
    },
  },
});

export const UIcompetitionActions = UIcompetitionSlice.actions;
export default UIcompetitionSlice;
