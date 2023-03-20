import { createSlice } from "@reduxjs/toolkit";

const auctionSlice = createSlice({
  name: "auction",
  initialState: { auctionList: [] },
  reducers: {
    setAuctions(state, action) {
      state.auctionList = action.payload;
    },
  },
});

export const auctionActions = auctionSlice.actions;
export default auctionSlice;
