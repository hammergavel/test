import mongoose from "mongoose";

const { Schema } = mongoose;

const userAuthSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  phoneNumber: { type: String, unique: true },
});

export default mongoose.models.userAuthModel ||
  mongoose.model("userAuthModel", userAuthSchema);
