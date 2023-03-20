import { createSlice } from "@reduxjs/toolkit";

const competitionSlice = createSlice({
  name: "competitions",
  initialState: {
    dailyComps: [],
  },
  reducers: {
    setDailyCompetitions(state, action) {
      state.dailyComps = action.payload;
    },
  },
});

export const competitionActions = competitionSlice.actions;
export default competitionSlice;
