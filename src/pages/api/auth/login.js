// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "@/util/mongo.js";
import userAuthModel from "@/models/authSchema";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { method } = req;
  const { contact, signinwithphone, password, otpverified, emailExists } =
    req.body;

  console.log(method);

  console.log("reqBody", req.body);

  await dbConnect();

  if (method === "POST") {
    if (!signinwithphone) {
      if (!emailExists) {
        try {
          const user = await userAuthModel.findOne({ email: contact });
          if (!user) {
            return res.json({ userExists: "!emailExists" });
          }
          res.status(200).json({ userExists: "emailExists" });
        } catch (e) {
          res.status(500).json("Something is not right at our end");
          console.log(e);
        }
      } else {
        try {
          const user = await userAuthModel.findOne({ contact });
          const isPasswordMatch = await bcrypt.compare(password, user.password);
          if (!isPasswordMatch) {
            return res.json({ message: "Invalid credentials" });
          }
          res.status(200).json({ proceedLogin: true });
        } catch (e) {
          res.status(500).json("Something is not right at our end");
          console.log(e);
        }
      }
    } else {
      try {
        console.log("Hey");
        const user = await userAuthModel.findOne({
          phoneNumber: contact,
        });
        if (!otpverified) {
          if (!user) {
            return res.json({ userExists: "!phoneExists" });
          }
          // condition: when user chose to login with password instead of otp
          if (password) {
            const isPasswordMatch = await bcrypt.compare(
              password,
              user.password
            );
            // const isPasswordMatch = user.password === password;
            if (!isPasswordMatch) {
              return res.json({ message: "Invalid credentials" });
            }
            return res.status(200).json({ message: "LoggingIn" });
          }
          // simply verifying if the user exists
          return res.status(200).json({ userExists: "phoneExists" });
        } else {
          // when user chose to login with otp
          return res.status(200).json("Logging you in");
        }
      } catch (e) {
        res.status(500).json("Something is not right at our end");
        console.log(e);
      }
    }
  }
}

/**
 * The client will send the phone number to the backend
 * Before sending the code the backend confirms if the user has already been registered or not
 * if he is already registered then send the status code 200, by which the front end can decide if they can send the otp or not
 * once the backend says that he is our user then the OTP will be sent to the phone.
 * Alongwith that a temporary otp token will generated on front end and will be sent to the backend which will be saved temporarily in the db
 * Now this otptoken will be saved in the front end state variable.
 * And when the user inputs the correct otp only then this otptoken will be sent to the backend
 * if the backend recieves the otptoken and verifies it with the correct db token then only it will give out the data.
 *
 * If the phone number or email client has input doesnt already exist in the db, then the backend will respond with 404.
 * Upon getting this response the front end will prompt with the message "Do you want to proceed with sign up" if the user
 * selects Yes, then again the same data will be sent to the backend hitting the signup api this time.
 * once more the phone number will be asked and verified and upon completion a short lived token will be granted.
 */
