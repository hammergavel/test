import { BACKEND_URL } from "@/util/urls";
import axios from "axios";
import { useEffect, useState } from "react";
import Dropdowncomps from "./Dropdowncomps";
import InputField from "./InputFields";
import NumberInputField from "./InputFieldsNumber";
import TimeInputField from "./InputFieldsTime";

function getOrdinalSuffix(number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const lastDigit = number % 10;
  const suffix = suffixes[lastDigit] || suffixes[0];
  return number + suffix;
}

const CreateAuction = () => {
  const [purseAmount, setPurseAmount] = useState(0);
  const [entryFee, setEntryFee] = useState(0);
  const [prizePool, setPrizePool] = useState([""]);
  const [auctionStartTime, setAuctionStartTime] = useState(new Date());
  const [spots, setSpots] = useState(0);

  const [time, settime] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: false })
  );
  const [date, setdate] = useState(new Date().toISOString().substring(0, 10));

  const [competitionID, setcompetitionID] = useState("");
  const [competitionDropDown, setcompetitionDropDown] = useState(false);
  const [comps, setcomps] = useState([]);

  const callCompetitions = async () => {
    const res = await axios.get(BACKEND_URL + "admin/createcompetition");
    setcomps(res.data.data);
  };

  const handleAuctionTimeSet = () => {
    const timestamp = Date.parse(`${date} ${time}`);
    const date1 = new Date(timestamp);

    setAuctionStartTime(timestamp);
  };

  useEffect(() => {
    handleAuctionTimeSet();
  }, [date, time]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auctionObj = {
      competitionId: competitionID,
      auction: {
        purseAmount,
        entryFee,
        prizePool,
        auctionStartTime,
        spots,
        membersList: [],
        membersAccount: [],
        purchaseList: [],
      },
    };
    try {
      const res = await axios.post("/api/admin/auction", auctionObj);
      // console.log(auctionObj);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="p-4 w-full">
        <div className="flex items-center gap-6 mt-5">
          <h1 className="text-4xl font-normal text-gray-theme whitespace-nowrap">
            Create Auctions
          </h1>
          <div className="w-full h-[1px] bg-slate-400"></div>
        </div>
      </div>
      <form className="p-5" onSubmit={handleSubmit}>
        <div className="w-full flex justify-end">
          {competitionDropDown && (
            <div
              className="w-full h-screen absolute top-0 left-0"
              onClick={() => {
                setcompetitionDropDown(false);
              }}
            ></div>
          )}
          <div class="relative w-1/3">
            <button
              class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={async (e) => {
                e.preventDefault();
                setcompetitionDropDown(true);
                await callCompetitions();
              }}
            >
              {competitionID !== ""
                ? { ...comps.find((s) => s._id === competitionID) }.seriesName
                : "Select Competition"}
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12l-5-5h10l-5 5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            {competitionDropDown && (
              <div
                className=" absolute max-h-[70vh] overflow-y-scroll z-10 right-0 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {comps.length ? (
                  comps.map((s, ind) => {
                    const { matchName, seriesName, team1, team2 } = s;
                    return (
                      <div
                        key={ind}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ring-1 ring-gray-400
                        "
                        role="menuitem"
                        onClick={() => {
                          setcompetitionID(s._id);
                          setcompetitionDropDown(false);
                        }}
                      >
                        <Dropdowncomps
                          team1Flag={team1.teamid.teamflagURL}
                          team2Flag={team2.teamid.teamflagURL}
                          team1={team1.teamid.name}
                          team2={team2.teamid.name}
                          series={seriesName}
                          match={matchName}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                  >
                    Please Wait ...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-7">
          <NumberInputField
            label={"Entry Fee"}
            id={"entry"}
            numberOffset={50}
            setterFunction={setEntryFee}
          />
          <NumberInputField
            label={"No. of Spots"}
            id={"spots"}
            numberOffset={100}
            setterFunction={setSpots}
          />
          <NumberInputField
            label={"Purse Amount"}
            id={"purse"}
            numberOffset={1000}
            setterFunction={setPurseAmount}
          />
        </div>
        <div className="grid grid-cols-3 mt-10 gap-x-7 gap-y-3">
          <div className="col-span-3 text-2xl px-5 mb-4 text-gray-500 flex justify-between">
            <div>Prize Pool</div>
            <div className="flex w-[20%] justify-around">
              <div
                className="text-sm w-20 text-center bg-gray-400 hover:bg-purple-theme p-2 rounded-full text-white"
                onClick={(e) => {
                  if (prizePool.length > 1) {
                    prizePool.pop();

                    setPrizePool([...prizePool]);
                  }
                }}
              >
                Remove
              </div>
              <div
                className="text-sm w-20 text-center bg-gray-400 hover:bg-purple-theme p-2 rounded-full text-white"
                onClick={(e) => {
                  setPrizePool([...prizePool, ""]);
                }}
              >
                Add
              </div>
            </div>
          </div>
          {prizePool.map((p, i) => (
            <div key={i}>
              <NumberInputField
                label={`${getOrdinalSuffix(i + 1) + " prize"}`}
                id={`${i + "prize"}`}
                numberOffset={500}
                onChange={(e) => {
                  if (Number(e.target.value) <= 0) {
                    prizePool.splice(i, 1, "");
                  } else {
                    prizePool.splice(i, 1, Number(e.target.value));
                  }
                  setPrizePool([...prizePool]);
                }}
                required
                handleIncrease={() => {
                  prizePool.splice(i, 1, Number(prizePool[i]) + 500);
                  setPrizePool([...prizePool]);
                }}
                handleDecrease={() => {
                  if (prizePool[i] - 500 > 0) {
                    prizePool.splice(i, 1, Number(prizePool[i]) - 500);
                    setPrizePool([...prizePool]);
                  } else {
                    prizePool.splice(i, 1, "");
                    setPrizePool([...prizePool]);
                  }
                }}
                value={prizePool[i]}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 mt-10 gap-x-7 gap-y-3">
          <TimeInputField
            label={"Auction Date"}
            date="true"
            value={date}
            onChange={(e) => {
              setdate(e.target.value);
            }}
          />
          <TimeInputField
            label={"Auction Start Time"}
            value={time}
            onChange={(e) => {
              settime(e.target.value);
            }}
          />
        </div>
        <button type="submit">Create Auction</button>
      </form>
    </div>
  );
};

export default CreateAuction;
