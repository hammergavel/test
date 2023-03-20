import mongoose from "mongoose";

const membersAccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile",
    required: true,
  },
  purseAmount: {
    type: Number,
    required: true,
  },
});

const purchaseListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile",
    required: true,
  },
  playersBought: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "player",
    required: true,
  },
});

const auction = new mongoose.Schema({
  membersList: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "profile",
    required: true,
  },
  purseAmount: {
    type: Number,
    required: true,
  },
  membersAccount: {
    type: [membersAccountSchema],
    required: true,
  },
  purchaseList: {
    type: [purchaseListSchema],
    required: true,
  },
  entryFee: {
    type: Number,
    required: true,
  },
  prizePool: {
    type: [],
    required: true,
  },
  auctionStartTime: {
    type: Number,
    required: true,
  },
  spots: {
    type: Number,
    required: true,
  },
});
const auctionSchema = new mongoose.Schema({
  competitionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "competition",
    required: true,
  },
  auctionList: {
    type: [auction],
    required: true,
  },
});

export default mongoose.models.auction ||
  mongoose.model("auction", auctionSchema);
