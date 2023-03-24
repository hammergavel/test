import dbConnect from "@/util/mongo.js";
import userAuthModel from "@/models/authSchema";
import bcrypt from "bcrypt";
import profileSchema from "@/models/profileSchema";
import corsMiddleware from '../../middleware/cors';

export default async function handler(req, res) {
  await new Promise((resolve, reject) => {
    corsMiddleware(req, res, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
    const { method } = req;
  const { contact, password } = req.body;

  console.log(method);

  console.log("reqBody", req.body);

  await dbConnect();

  let hashedPass = await bcrypt.hash(password, 10);

  if (method === "POST") {
    try {
      const user = await userAuthModel.create({
        phoneNumber: contact,
        password: hashedPass,
        email: "",
      });

      let profile = await profileSchema.create({
        user: user._id,
        walletAmount: 0,
      });

      profile.populate("user");

      const auth = {
        email: profile.user.email,
        phoneNumber: profile.user.phoneNumber,
        walletAmount: 0,
      };
      res.status(200).json({ success: true, data: auth });
    } catch (e) {
      res.status(500).json("The phone number already exists");
      console.log(e);
    }
  }
}
