import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAuthModel",
    required: true,
  },
  walletAmount: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.models.profile ||
  mongoose.model("profile", profileSchema);
