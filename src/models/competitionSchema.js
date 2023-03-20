const mongoose = require("mongoose");

const competitionSchema = new mongoose.Schema({
  seriesName: {
    type: String,
    required: true,
  },
  matchName: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  international: {
    type: Boolean,
    required: true,
  },
  team1: {
    teamid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "team",
      required: true,
    },
    captainIndex: {
      type: Number,
      required: true,
    },
    playersList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player",
      },
    ],
  },
  team2: {
    teamid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "team",
      required: true,
    },
    captainIndex: {
      type: Number,
      required: true,
    },
    playersList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player",
      },
    ],
  },
  sportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sport",
    required: true,
  },
});

export default mongoose.models.competition ||
  mongoose.model("competition", competitionSchema);

// const Competition = require('./competitionModel');
// const Player = require('./playerModel');

// // Suppose you want to set the captain of team1 to a player with _id of "123"
// const playerId = "123";

// // Find the player document by _id using populate
// const player = await Player.findById(playerId);

// // Update the competition document with the player's _id as the captainId
// const competition = await Competition.findOneAndUpdate(
//   { 'team1.captainId': playerId },
//   { $set: { 'team1.captainId': player._id } },
//   { new: true }
// ).populate('team1.captainId');
