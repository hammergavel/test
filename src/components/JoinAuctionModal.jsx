import React from "react";
import { MyTimer } from "./dailyCompetitions/CompetitionCard";

const JoinAuctionModal = ({ isLeagueAuction, timeleft }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + timeleft);
  const isAmountEnough = true;
  return (
    <>
      <div className="text-darkblue-theme text-xl tracking-tighter font-medium ml-2 mb-2">
        Join Auction Room
      </div>
      <div className="w-full h-[1px] bg-darkblue-theme"></div>
      <div>
        {isLeagueAuction ? (
          <div
            id="competitionCard"
            className="w-full h-[7rem] flex flex-col justify-between bg-white drop-shadow-md rounded-md px-6 py-2 my-1 transition-transform active:scale-[1.02] ease-out delay-[0s] cursor-default"
          >
            <div className="text-center text-md font-semibold text-darkblue-theme">
              Pakistan Super League
              <p className="text-center text-[9px] font-light leading-[7px]">
                8 Feb - 13 Mar
              </p>
            </div>
            <div className="flex items-center justify-between my-2">
              <div className="flex flex-wrap justify-between max-w-[7rem] rounded-full p-[1px]">
                <div className="leaguesTeamRight">
                  <img
                    src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                    className="h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
                <div className="leaguesTeamRight">
                  <img
                    src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                    className="h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
                <div className="leaguesTeamRight">
                  <img
                    src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                    className="h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
                <div className="leaguesTeamRight">
                  <img
                    src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                    className="h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
                <div className="leaguesTeamRight">
                  <img
                    src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                    className="h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
              </div>
              {/* Time Here */}
              <MyTimer expiryTimestamp={time} />
              <div className="flex -scale-x-100 items-center justify-between  max-w-[7rem] rounded-full p-[1px]">
                <div className="leaguesTeamLeft">
                  <img
                    src="https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
                    className="h-[30px] w-[30px] -scale-x-100 rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
                <div className="leaguesTeamLeft">
                  <img
                    src="https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
                    className="h-[30px] w-[30px] -scale-x-100 rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
                <div className="leaguesTeamLeft">
                  <img
                    src="https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg"
                    className="h-[30px] w-[30px] -scale-x-100 rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
                <div className="leaguesTeamLeft">
                  <img
                    src="https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg"
                    className="h-[30px] w-[30px] -scale-x-100 rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
                <div className="leaguesTeamLeft">
                  <img
                    src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
                    className="h-[30px] w-[30px] -scale-x-100 rounded-full object-cover outline outline-2 outline-white"
                  ></img>
                </div>
              </div>
            </div>
            <div className="text-center font-medium text-[10px]">The Oval</div>
          </div>
        ) : (
          <div>
            <div className="w-full h-[7rem] flex flex-col drop-shadow-md rounded-md px-6 py-2 my-1 transition-transform active:scale-[1.02] ease-out delay-[0s] cursor-default">
              <div className="text-center text-[8px] text-darkblue-theme">
                Natwest ODI Series
                <p className="font-semibold text-[10px] leading-[7px]">
                  Match 1
                </p>
              </div>
              <div className="flex items-center justify-between my-2">
                <div className="flex items-center justify-between w-[5rem] theme-gradient rounded-full p-[1px]">
                  <div className="flex justify-center w-full text-xl font-semibold text-white">
                    IND
                  </div>
                  <img
                    src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                    className="h-[30px] w-[30px] rounded-full object-cover"
                  ></img>
                </div>
                {/* Time Here */}
                <MyTimer expiryTimestamp={time} />
                <div className="flex items-center justify-between w-[5rem] theme-gradient rounded-full p-[1px]">
                  <img
                    src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                    className="h-[30px] w-[30px] rounded-full object-cover"
                  ></img>
                  <div className="flex justify-center w-full text-xl font-semibold text-white">
                    ENG
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-[10px]">
                The Oval
              </div>
            </div>

            <div className="h-[7rem] flex flex-col justify-between">
              <div className="w-full px-4">
                <div className="flex justify-between w-full mb-1">
                  <p>Auction Entry Fee</p>
                  <p>₹ 14,500</p>
                </div>
                <div className="w-full h-[1px] bg-gray-theme "></div>
              </div>
              <div className="w-full px-4">
                <div className="flex justify-between w-full mb-1">
                  <p>Wallet Balance</p>
                  <p>₹ 14,500</p>
                </div>
                <div className="w-full h-[1px] bg-gray-theme "></div>
              </div>
              <div className="w-full px-4">
                <div className="flex justify-between w-full mb-1 text-red-theme">
                  <p>Remaining Amount</p>
                  <p>₹ 14,500</p>
                </div>
                <div className="w-full h-[1px] bg-gray-theme "></div>
              </div>
            </div>
            <div className="px-3">
              <p className="my-3">Disclaimer</p>
              <p className="text-xs font-light">
                Joining the auction is an irreversible process, if you join
                once, you will be charged immediately. The prize pool shown is
                subjected to change in case of low number of joined users after
                cut off time.
              </p>
            </div>

            {!isAmountEnough ? (
              <>
                <button className="w-full bg-purple-theme text-white py-2 rounded-lg mt-6 active:scale-[0.97]">
                  Join Auction
                </button>
              </>
            ) : (
              <>
                <p className="text-center text-red-theme font-medium text-xs mt-7">
                  Your wallet is short of the required auction entry fee,
                  continue with adding the amount in your wallet
                </p>
                <button className="w-full bg-yellow-theme text-darkblue-theme py-2 rounded-lg mt-6 active:scale-[0.97]">
                  Add Money
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default JoinAuctionModal;
