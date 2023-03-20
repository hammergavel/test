import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UIAuctionActions } from "@/store/UIAuctionReducer";

const AuctionCard = ({ details }) => {
  const dispatch = useDispatch();

  const { entryFee, auctionStartTime, spots, prizePool } = details;
  const prizepoolamount = () => {
    let val = 0;
    prizePool.forEach((x) => {
      val += x;
    });
    return val;
  };

  return (
    <div className="bg-white w-full flex flex-col py-4 rounded-md drop-shadow-md">
      <div className="flex items-center justify-around px-3">
        <div className="flex flex-col items-center">
          <div className="text-xs tracking-tight">Prize Pool</div>
          <div className="text-2xl font-semibold tracking-tight">
            ₹{prizepoolamount()}
          </div>
        </div>
        <div className="h-[30px] w-[2px] bg-darkblue-theme"></div>
        <div className="flex flex-col items-center">
          <div className="text-xs tracking-tight">Auction Starts in</div>
          <div className="text-2xl font-semibold tracking-tight">59m</div>
        </div>
        <div className="h-[30px] w-[2px] bg-darkblue-theme"></div>
        <div className="flex flex-col items-center">
          <div className="text-xs tracking-tight">Entry Fee</div>
          <div className="text-2xl font-semibold tracking-tight">
            ₹{entryFee}
          </div>
        </div>
      </div>
      <div className="w-full flex mt-2 px-3">
        {/* Spots */}
        <div className="flex-[2] flex flex-col w-full h-6 pr-3">
          <div className="w-full flex justify-between text-[10px] mb-1">
            <p className=" text-darkblue-theme">
              Spots Left <span className="font-semibold">8</span>
            </p>
            <p className=" text-gray-theme">{spots} Spots</p>
          </div>
          <div className="w-full h-1 rounded-full bg-[#E1DDDD]">
            <div className="w-1/3 h-full rounded-full bg-darkblue-theme"></div>
          </div>
        </div>
        {/* Spots */}
        {/* Button */}
        <div
          onClick={() => {
            dispatch(UIAuctionActions.setJoinAuctionModal(true));
            dispatch(UIAuctionActions.setAuctionBtn(true));
          }}
          className="flex-1 flex h-8 bg-yellow-theme rounded-full items-center pl-[8px] pr-[2px] py-[2px] hover:scale-[0.97] active:scale-[1.02] cursor-pointer shadow-lg shadow-[#fdc52c81]"
        >
          <div className="flex justify-center w-full text-base tracking-tighter font-medium text-darkblue-theme">
            Join Now
          </div>
          <div className="bg-darkblue-theme w-[35%] h-[95%] rounded-full flex items-center justify-center">
            <IoIosArrowForward className="text-white text-lg" />
          </div>
        </div>
        {/* Button */}
      </div>
    </div>
  );
};

export default AuctionCard;
