import mongoose from "mongoose";
import sportSchema from "./sportSchema";
const playerSchema = new mongoose.Schema({
  sportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sport",
    required: true,
  },
  playerName: {
    type: String,
    required: true,
  },
  playerPhotoURL: {
    type: String,
    required: true,
  },
  nationality: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "team",
    required: true,
  },
  playerRole: {
    type: String,
    required: true,
  },
  playerBasePrice: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.player || mongoose.model("player", playerSchema);
