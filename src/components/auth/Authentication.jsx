import { UIMainActions } from "@/store/UIMainReducer";
import { authentication } from "@/util/firebase";
import { BACKEND_URL } from "@/util/urls";
import axios from "axios";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";

const Authentication = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [signinwithphone, setsigninwithphone] = useState(-1);
  const [otpverified, setotpverified] = useState(false);
  const [phoneExists, setphoneExists] = useState(-1);
  const [emailExists, setemailExists] = useState(false);
  const [screen, setscreen] = useState("email");
  const [wait, setwait] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const recaptchaGenerate = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-verifier",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };

  const requestOTP = async () => {
    recaptchaGenerate();
    let appVerifier = window.recaptchaVerifier;
    try {
      const confirmationResult = await signInWithPhoneNumber(
        authentication,
        contact,
        appVerifier
      );

      console.log(confirmationResult);
      window.confirmationResult = confirmationResult;
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOTP = async (otp) => {
    if (otp.length === 6) {
      console.log(otp);
      let confirmationResult = window.confirmationResult;
      try {
        const result = await confirmationResult.confirm(otp);
        const user = result.user;
        console.log(user);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  };

  const testInput = (e) => {
    const input = e.target.value;
    setContact(input);
    if (/\S+@\S+\.\S+/.test(input)) {
      setsigninwithphone(false);
    } else if (/^\+\d{1,20}$/.test(input)) {
      setsigninwithphone(true);
    } else {
      setsigninwithphone(-1);
    }
  };

  console.log(signinwithphone);

  const handleFirstAttempt = async () => {
    const reqBody = {
      contact,
      signinwithphone,
      password,
      emailExists: false,
      otpverified,
    };

    try {
      setwait(true);
      const firstResponse = await axios.post(
        `${BACKEND_URL}/auth/login`,
        reqBody
      );
      setwait(false);
      const res = firstResponse.data;
      if (signinwithphone) {
        console.log("here");
        if (res.userExists === "phoneExists") {
          // send the otp
          setwait(true);
          requestOTP();
          setwait(false);
          setphoneExists(res.userExists);
          setotpverified(true);
          setscreen("signinotp");
        } else {
          setphoneExists(res.userExists);
        }
      } else {
        if (res.userExists === "emailExists") {
          setemailExists(res.userExists === "emailExists" ? true : false);
          setscreen("signinpassword");
        } else {
          setemailExists(res.userExists === "emailExists" ? true : false);
          setContact("");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleRegister = async () => {
    setwait(true);
    await requestOTP();

    setwait(false);

    setscreen("signupotp");
  };

  const handleSignUpOtp = async (e) => {
    const code = e.target.value;
    if (code.length === 6) {
      setwait(true);
      const isOtpCorrect = await verifyOTP(code);
      console.log(isOtpCorrect);
      setwait(false);
      if (isOtpCorrect) {
        setscreen("signuppassword");
      }
    }
  };

  const handleSignInOtp = async (e) => {
    const code = e.target.value;
    if (code.length === 6) {
      setwait(true);
      const isOtpCorrect = await verifyOTP(code);
      // console.log("isOtpCorrect" + isOtpCorrect);
      setwait(false);
      if (isOtpCorrect) {
        await handlefinallogin();
      }
    }
  };

  const handleSignInWithPassword = () => {
    setotpverified(false);
    setscreen("signinpassword");
  };

  const handlefinallogin = async () => {
    // if password was chosen after phone number then, signinwithphone will be true, backend will automatically ignore the email
    setwait(true);

    await axios.post(`${BACKEND_URL}/auth/login`, {
      contact,
      signinwithphone,
      password,
      otpverified,
      emailExists,
    });

    setwait(false);
    router.replace("/competitions");
    dispatch(UIMainActions.setLoggedIn("true"));
  };

  const handlefinalsignup = async () => {
    if (password === confirmPassword) {
      try {
        setwait(true);
        const createUser = await axios.post(`${BACKEND_URL}/auth/signup`, {
          contact,
          password,
        });
      } catch (e) {
        console.log(e);
      }
      setwait(false);
    }
  };

  return (
    <>
      {wait && (
        <div className="absolute z-10 w-full h-screen bg-gray-100 opacity-80 flex justify-center items-center">
          Please Wait ...
        </div>
      )}
      <div className="h-full theme-gradient pt-[20%]">
        {screen === "email" && (
          <div className="flex flex-col mx-4 pt-[30%]">
            <div className="font-semibold text-white text-3xl max-w-[15rem] tracking-tight mb-10">
              Get Started with your sport.
            </div>

            <label
              for="contact"
              className="text-light-gray-theme font-light text-xs"
            >
              Enter Email or Phone
            </label>
            <input
              autoComplete="off"
              type="tel"
              value={contact}
              onChange={testInput}
              id="contact"
              placeholder="+91 4451 232123 or abc@mysite.com"
              className="my-2 bg-transparent placeholder:text-xs placeholder:italic placeholder:text-[#ffffff92] border border-light-gray-theme text-lg text-light-gray-theme py-1 px-4 outline-none rounded-full"
            />
            {emailExists === "!emailExists" && (
              <div className="w-full text-xs text-yellow-theme text-center">
                {
                  "The email you provided doesn't exist, register using your phone number."
                }
              </div>
            )}

            {phoneExists !== "!phoneExists" ? (
              <button
                onClick={handleFirstAttempt}
                className="bg-yellow-theme text-lg font-semibold mt-2 py-1 rounded-full flex items-center justify-center active:scale-[1.02] transition-transform disabled:bg-[#fdc52ccd] disabled:text-[#0a09278a]"
                disabled={signinwithphone === -1}
              >
                <>
                  Proceed <IoIosArrowForward className="text-2xl" />
                </>
              </button>
            ) : (
              <>
                <div className="w-full text-xs text-light-gray-theme text-center">
                  {"We're excited to onboard you, hit register now!"}
                </div>
                <button
                  onClick={handleRegister}
                  className="bg-red-theme w-full text-lg font-semibold text-light-gray-theme mt-2 py-1 rounded-full flex items-center justify-center active:scale-[1.02] transition-transform disabled:bg-[#fdc52ccd] disabled:text-[#0a09278a]"
                  disabled={signinwithphone === -1}
                >
                  Register <IoIosArrowForward className="text-2xl" />
                </button>
              </>
            )}
          </div>
        )}
        {screen === "signinotp" && (
          <div className="flex flex-col mx-4 pt-[50%]">
            <label
              for="contact"
              className="text-light-gray-theme font-light text-xs"
            >
              {"Enter the OTP"}
            </label>

            <input
              autoComplete="off"
              type="tel"
              onChange={handleSignInOtp}
              id="otp"
              placeholder="123-123"
              className="my-2 bg-transparent placeholder:text-xs placeholder:italic placeholder:text-[#ffffff92] border border-light-gray-theme text-lg text-light-gray-theme py-1 px-4 outline-none rounded-full"
            />

            <button
              onClick={handleSignInWithPassword}
              className="bg-yellow-theme text-lg font-semibold mt-2 py-1 rounded-full flex items-center justify-center active:scale-[1.02] transition-transform disabled:bg-[#fdc52ccd] disabled:text-[#0a09278a]"
            >
              <>
                {"Sign In with Password"}{" "}
                <IoIosArrowForward className="text-2xl" />
              </>
            </button>
          </div>
        )}
        {screen === "signupotp" && (
          <div className="flex flex-col mx-4 pt-[50%]">
            <label
              for="contact"
              className="text-light-gray-theme font-light text-xs"
            >
              {"Enter the Sign Up OTP"}
            </label>

            <input
              autoComplete="off"
              type="tel"
              onChange={handleSignUpOtp}
              id="otp"
              placeholder="123-123"
              className="my-2 bg-transparent placeholder:text-xs placeholder:italic placeholder:text-[#ffffff92] border border-light-gray-theme text-lg text-light-gray-theme py-1 px-4 outline-none rounded-full"
            />
          </div>
        )}
        {screen === "signinpassword" && (
          <div className="flex flex-col mx-4 pt-[50%]">
            <label
              for="contact"
              className="text-light-gray-theme font-light text-xs"
            >
              {"Enter the Password"}
            </label>

            <input
              autoComplete="off"
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder=""
              className="my-2 bg-transparent placeholder:text-xs placeholder:italic placeholder:text-[#ffffff92] border border-light-gray-theme text-lg text-light-gray-theme py-1 px-4 outline-none rounded-full"
            />

            <button
              onClick={handlefinallogin}
              className="bg-yellow-theme text-lg font-semibold mt-2 py-1 rounded-full flex items-center justify-center active:scale-[1.02] transition-transform disabled:bg-[#fdc52ccd] disabled:text-[#0a09278a]"
            >
              <>
                {"Proceed"} <IoIosArrowForward className="text-2xl" />
              </>
            </button>
          </div>
        )}
        {screen === "signuppassword" && (
          <div className="flex flex-col mx-4 pt-[50%]">
            <label
              for="password"
              className="text-light-gray-theme font-light text-xs"
            >
              {"Enter the Password"}
            </label>

            <input
              autoComplete="off"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              placeholder=""
              className="my-2 bg-transparent placeholder:text-xs placeholder:italic placeholder:text-[#ffffff92] border border-light-gray-theme text-lg text-light-gray-theme py-1 px-4 outline-none rounded-full"
            />
            <label
              for="confirm"
              className="text-light-gray-theme font-light text-xs"
            >
              {"Confirm the Password"}
            </label>

            <input
              type="password"
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
              id="confirm"
              placeholder=""
              className="my-2 bg-transparent placeholder:text-xs placeholder:italic placeholder:text-[#ffffff92] border border-light-gray-theme text-lg text-light-gray-theme py-1 px-4 outline-none rounded-full"
            />

            <button
              onClick={handlefinalsignup}
              className="bg-yellow-theme text-lg font-semibold mt-2 py-1 rounded-full flex items-center justify-center active:scale-[1.02] transition-transform disabled:bg-[#fdc52ccd] disabled:text-[#0a09278a]"
            >
              <>
                {"Register"} <IoIosArrowForward className="text-2xl" />
              </>
            </button>
          </div>
        )}

        {/* <form>
        <label>
          Verification Code:
          <input type="text" value={otp} onChange={verifyOTP} />
        </label>
        <button type="submit">Verify Phone Number</button>
      </form> */}
        <div className="" id="recaptcha-verifier"></div>
      </div>
    </>
  );
};

// export const BACKEND_URL = "http://localhost:3000/api/";
export default Authentication;
