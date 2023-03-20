import { createSlice } from "@reduxjs/toolkit";

const UIMainSlice = createSlice({
  name: "mainUI",
  initialState: {
    isLogged: "false",
    main: { screenName: "home", screenInd: 0 },
  },
  reducers: {
    setLoggedIn(state, action) {
      state.isLogged = action.payload;
    },
    setMainScreen(state, action) {
      state.main = action.payload;
    },
  },
});

export const UIMainActions = UIMainSlice.actions;
export default UIMainSlice;
