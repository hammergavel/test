import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auctionSlice from "./auctionReducer";
import competitionSlice from "./competitionReducer";
import UIAuctionSlice from "./UIAuctionReducer";
import UIcompetitionSlice from "./UICompetitionsReducer";
import UIMainSlice from "./UIMainReducer";
import UIMyLeaguesSlice from "./UIMyLeaguesReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

// const persistedReducerUser = persistReducer(persistConfig, userSlice.reducer);
// const persistedReducerPost = persistReducer(persistConfig, postSlice.reducer);
// const persistedReducerProposal = persistReducer(
//   persistConfig,
//   proposalSlice.reducer
// );

const ui = combineReducers({
  auction: auctionSlice.reducer,
  competitionSlice: competitionSlice.reducer,
  UIcompetitionSlice: UIcompetitionSlice.reducer,
  UImainslice: UIMainSlice.reducer,
  UImyleagues: UIMyLeaguesSlice.reducer,
  UIauctions: UIAuctionSlice.reducer,
});
const uiReducer = persistReducer(persistConfig, ui);

export const store = configureStore({
  reducer: uiReducer,
});

export const persistor = persistStore(store);
