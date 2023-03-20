import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
const Index = () => {
  const screenName = useSelector((state) => state.UImainslice.main.screenName);
  const router = useRouter();
  return (
    <>
      <AnimatePresence>
        {screenName === "wallet" && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="px-2 pt-3"
          >
            <div className="text-2xl w-full mb-6 font-semibold tracking-tighter text-darkblue-theme">
              My Wallet
              <div className="h-[1px] w-full bg-darkblue-theme mt-2"></div>
            </div>
            <div className="flex flex-col justify-between w-full h-[58vh]">
              <div className="flex flex-col justify-between h-[65%] w-full px-3 pb-3 rounded-md border border-gray-theme">
                <div className="w-full h-[40%] flex flex-col items-center justify-center">
                  <p className="text-sm">Total Balance</p>
                  <p className="text-3xl font-semibold">₹25,770</p>
                  <button className="bg-yellow-theme text-darkblue-theme w-[30%] font-medium text-sm py-1 rounded-md drop-shadow-md">
                    ADD CASH
                  </button>
                </div>
                <div className="h-[1px] w-full bg-gray-400 mt-2"></div>
                <div className="text-[10px] font-light text-gray-theme">
                  Amount Added
                  <p className="text-2xl leading-5 tracking-tight font-semibold text-darkblue-theme">
                    ₹25
                  </p>
                </div>
                <div className="h-[1px] w-full bg-gray-400 mt-2"></div>
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-light text-gray-theme">
                    Winnings
                    <p className="text-2xl leading-5 tracking-tight font-semibold text-darkblue-theme">
                      ₹25
                    </p>
                  </div>
                  <button className="bg-yellow-theme text-darkblue-theme font-normal text-[10px] py-1 px-2 rounded-md drop-shadow-md">
                    Withdraw
                  </button>
                </div>
                <div className="h-[1px] w-full bg-gray-400 mt-2"></div>
                <div className="text-[10px] font-light text-gray-theme">
                  Cash Bonus
                  <p className="text-2xl leading-5 tracking-tight font-semibold text-darkblue-theme">
                    ₹25
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-between px-3 h-[15%] w-full rounded-md border border-gray-theme">
                <p className="text-sm tracking-tighter">My Transactions</p>
                <IoIosArrowForward />
              </button>
              <button className="flex items-center justify-between px-3 h-[15%] w-full rounded-md border border-gray-theme">
                <div>
                  <p className="text-sm tracking-tighter">Manage Payments</p>
                  <p className="text-gray-theme text-[10px] text-left">
                    See Back Accounts
                  </p>
                </div>
                <IoIosArrowForward />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
