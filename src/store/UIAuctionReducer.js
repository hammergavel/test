import { createSlice } from "@reduxjs/toolkit";

const UIAuctionSlice = createSlice({
  name: "auctionUI",
  initialState: {
    joinAuctionModal: false,
    auctionButtonClicked: false,
  },
  reducers: {
    setJoinAuctionModal(state, action) {
      state.joinAuctionModal = action.payload;
    },
    setAuctionBtn(state, action) {
      state.auctionButtonClicked = action.payload;
    },
  },
});

export const UIAuctionActions = UIAuctionSlice.actions;
export default UIAuctionSlice;
