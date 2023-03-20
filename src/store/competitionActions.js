import axios from "axios";
import { competitionActions } from "./competitionReducer";

const { BACKEND_URL } = require("@/util/urls");

export const fetchCompetitions = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(BACKEND_URL + "admin/createcompetition");
      dispatch(competitionActions.setDailyCompetitions(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
};
