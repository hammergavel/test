import { auctionActions } from "./auctionReducer";

const { BACKEND_URL } = require("@/util/urls");
const { default: axios } = require("axios");

export const fetchAuctions = (compId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(BACKEND_URL + "admin/auction", {
        params: { competitionId: compId },
      });

      const auctions = res.data.data[0].auctionList;
      //   console.log(auctions);

      dispatch(auctionActions.setAuctions(auctions));
    } catch (err) {
      console.log(err);
    }
  };
};
