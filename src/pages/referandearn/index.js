import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { HiOutlineClipboard } from "react-icons/hi";

const Index = () => {
  const screenName = useSelector((state) => state.UImainslice.main.screenName);
  const router = useRouter();
  return (
    <>
      <AnimatePresence>
        {screenName === "refer" && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="px-2 pt-3"
          >
            <div className="text-2xl w-full mb-6 font-semibold tracking-tighter text-darkblue-theme">
              Refer and Earn
              <div className="h-[1px] w-full bg-darkblue-theme mt-2"></div>
            </div>

            <div className="w-full flex justify-center items-center px-3 h-[60vh]">
              <div className="bg-white rounded-md w-full py-3 px-5 h-[95%] flex flex-col justify-center">
                <div className="flex flex-col justify-between items-center h-[40%] mb-2">
                  <div className="bg-gray-theme flex items-center justify-center rounded-full h-10 w-10 font-semibold text-white">
                    1
                  </div>
                  <p className="font-light text-lg text-center tracking-tight">
                    Send this link to your friends
                  </p>
                  <div className="h-[1px] w-full bg-gray-theme"></div>
                  <div className="flex w-full border border-gray-500 px-2 py-1 rounded-lg">
                    <div className="w-[90%] text-sm tracking-tighter">
                      here goes the link
                    </div>
                    <div className="w-[10%] flex items-center justify-center">
                      <HiOutlineClipboard />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center h-[40%] mt-2">
                  <div className="bg-gray-theme flex items-center justify-center rounded-full h-10 w-10 font-semibold text-white">
                    2
                  </div>
                  <p className="font-light text-lg text-center tracking-tight leading-5">
                    Ask them to put this code when signing up
                  </p>
                  <div className="h-[1px] w-full bg-gray-theme"></div>
                  <div className="flex w-full border border-gray-500 px-2 py-1 rounded-lg">
                    <div className="w-[90%] text-sm tracking-tighter">
                      QW4HDDQ
                    </div>
                    <div className="w-[10%] flex items-center justify-center">
                      <HiOutlineClipboard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
