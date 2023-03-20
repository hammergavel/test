import mongoose from "mongoose";
const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  national: {
    type: Boolean,
    required: true,
  },
  teamflagURL: {
    type: String,
    required: true,
  },
  sport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sport",
    required: true,
  },
});

export default mongoose.models.team || mongoose.model("team", teamSchema);
