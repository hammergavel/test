import Image from "next/image";
import { useState } from "react";

const SelectSquad = ({
  selectSquadModal,
  setselectSquadModal,
  teamId1,
  teamId2,
  playersList,
  setselectedTeam1,
  setselectedTeam2,
  selectedTeam1,
  selectedTeam2,
}) => {
  const [CurrentTeam, setCurrentTeam] = useState(teamId1);
  //
  //   console.log("S1", selectedTeam1, "s2", selectedTeam2);
  return (
    <>
      {selectSquadModal && (
        <>
          <div
            className="absolute w-full h-screen top-0 left-0 z-20 bg-[#ffffffa0]"
            onClick={() => {
              setselectSquadModal(false);
            }}
          ></div>
          <div className="absolute overflow-y-scroll py-2 px-3 rounded-md shadow-lg ring-1 ring-gray-400 top-1/2 left-1/2 -translate-x-1/2 z-30 -translate-y-1/2 bg-gradient-to-br from-gray-50 to-gray-100 w-[40vw] h-[70vh]">
            <p className="text-3xl font-light mb-5 opacity-30">Select Squad</p>
            <div className="w-full flex justify-around mt-3">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentTeam(teamId1);
                }}
              >
                Team1
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentTeam(teamId2);
                }}
              >
                Team2
              </button>
            </div>
            <div>
              {playersList
                .filter((x) => x.nationality._id === CurrentTeam)
                .map((v, ind) => {
                  if (CurrentTeam === teamId1) {
                    if (selectedTeam1.some((x) => x === v._id)) {
                      return (
                        <div
                          key={ind}
                          className="w-full my-2 px-1 pr-2 py-1 rounded-full ring-1 ring-gray-500 flex items-center justify-between"
                          onClick={() => {
                            const temp = selectedTeam1.splice(ind, 1);

                            setselectedTeam1([...selectedTeam1]);
                          }}
                        >
                          <img
                            src={v.playerPhotoURL}
                            alt=""
                            className="w-10 h-10 object-cover rounded-full"
                          />
                          <div className="font-semibold">{v.playerName}</div>
                          <div>{v.playerRole}</div>
                          <div>{v.playerBasePrice.toLocaleString()}</div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={ind}
                          className="w-full opacity-10 my-2 px-1 pr-2 py-1 rounded-full ring-1 ring-gray-500 flex items-center justify-between"
                          onClick={() => {
                            // const temp = selectedTeam1.splice(ind, 1);

                            setselectedTeam1([...selectedTeam1, v._id]);
                          }}
                        >
                          <img
                            src={v.playerPhotoURL}
                            alt=""
                            className="w-10 h-10 object-cover rounded-full"
                          />
                          <div className="font-semibold">{v.playerName}</div>
                          <div>{v.playerRole}</div>
                          <div>{v.playerBasePrice.toLocaleString()}</div>
                        </div>
                      );
                    }
                  } else {
                    if (selectedTeam2.some((x) => x === v._id)) {
                      return (
                        <div
                          key={ind}
                          className="w-full my-2 px-1 pr-2 py-1 rounded-full ring-1 ring-gray-500 flex items-center justify-between"
                          onClick={() => {
                            const temp = selectedTeam2.splice(ind, 1);

                            setselectedTeam2([...selectedTeam2]);
                          }}
                        >
                          <img
                            src={v.playerPhotoURL}
                            alt=""
                            className="w-10 h-10 object-cover rounded-full"
                          />
                          <div className="font-semibold">{v.playerName}</div>
                          <div>{v.playerRole}</div>
                          <div>{v.playerBasePrice.toLocaleString()}</div>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          key={ind}
                          className="w-full opacity-10 my-2 px-1 pr-2 py-1 rounded-full ring-1 ring-gray-500 flex items-center justify-between"
                          onClick={() => {
                            // const temp = selectedTeam2.splice(ind, 1);

                            setselectedTeam2([...selectedTeam2, v._id]);
                          }}
                        >
                          <img
                            src={v.playerPhotoURL}
                            alt=""
                            className="w-10 h-10 object-cover rounded-full"
                          />
                          <div className="font-semibold">{v.playerName}</div>
                          <div>{v.playerRole}</div>
                          <div>{v.playerBasePrice.toLocaleString()}</div>
                        </div>
                      );
                    }
                  }
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SelectSquad;
