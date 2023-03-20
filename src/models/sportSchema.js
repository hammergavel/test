import mongoose from "mongoose";

const sportSchema = new mongoose.Schema({
  sportName: { type: String, required: true },
  statsFormat: {
    type: [{ type: String, required: true }],
    required: true,
  },
});

export default mongoose.models.sport || mongoose.model("sport", sportSchema);
