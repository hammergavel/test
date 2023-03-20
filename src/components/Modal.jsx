import { auctionActions } from "@/store/auctionReducer";
import { UIAuctionActions } from "@/store/UIAuctionReducer";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useDispatch, useSelector } from "react-redux";

import { HiOutlineX } from "react-icons/hi";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const joinAuctionModalState = useSelector(
    (state) => state.UIauctions.joinAuctionModal
  );
  return (
    <AnimatePresence>
      {joinAuctionModalState && (
        <>
          {/* stagger children to prevent glitchy transition and stagger needs the children to be motion div */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute top-0 left-0 w-screen h-full z-20"
              onClick={() => {
                dispatch(UIAuctionActions.setJoinAuctionModal(false));
              }}
            ></div>
            <div className="absolute min-h-[15%] border-[1px] border-light-gray-theme w-[95%] z-20 drop-shadow-md top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white rounded-md py-3">
              <HiOutlineX
                className="absolute right-0 text-xl text-gray-theme cursor-pointer border-2 border-gray-theme  rounded-full mr-1 mt-1"
                onClick={() => {
                  dispatch(UIAuctionActions.setJoinAuctionModal(false));
                }}
              />
              <div className="w-full px-2">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
