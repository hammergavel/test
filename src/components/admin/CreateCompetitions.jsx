import { BACKEND_URL } from "@/util/urls";
import axios from "axios";
import { useEffect, useState } from "react";
import InputField from "./InputFields";
import RadioButtons from "./RadioButtons";
import SelectSquad from "./SelectSquad";

const CreateCompetitions = () => {
  const [seriesName, setseriesName] = useState("");
  const [matchName, setmatchName] = useState("");
  const [venue, setvenue] = useState("");
  const [international, setinternational] = useState(true);
  const [selectedsport, setselectedsport] = useState("none");
  const [sportdropdown, setsportdropdown] = useState(false);
  const [teams, setteams] = useState([]);
  const [players, setplayers] = useState([]);
  const [sportList, setsportList] = useState([]);
  const [searchteam, setsearchteams] = useState([]);
  const [team1, setteam1] = useState("");
  const [team2, setteam2] = useState("");

  const [selectedTeam1, setselectedTeam1] = useState([]);
  const [selectedTeam2, setselectedTeam2] = useState([]);

  const [capt1, setcapt1] = useState(0);
  const [capt2, setcapt2] = useState(0);

  const [teamdropdown1, setteamdropdown1] = useState("off");
  const [teamdropdown2, setteamdropdown2] = useState("off");

  const [players1Called, setplayers1Called] = useState(false);
  const [players2Called, setplayers2Called] = useState(false);

  const [selectSquadModal, setselectSquadModal] = useState(false);

  const selectSquadBtn = () => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          setselectSquadModal(true);
        }}
        className="mt-2 p-2 text-gray-400 rounded-xl border-2 border-gray-400 hover:border-gray-600 hover:text-gray-600"
      >
        Select Squad
      </button>
    );
  };

  const callSports = async () => {
    const res = await axios.get(BACKEND_URL + "admin/sport");
    setsportList(res.data.data);
  };
  const callTeam = async () => {
    const res = await axios.get(BACKEND_URL + "admin/team", {
      params: { international },
    });
    setteams(res.data.data);
  };

  useEffect(() => {
    async function fetchTeam() {
      await callTeam();
    }
    fetchTeam();
  }, [international]);

  const callPlayers = async (nationality, team) => {
    if (team === 1) {
      setplayers1Called(false);
    }
    if (team === 2) {
      setplayers2Called(false);
    }
    const res = await axios.get(BACKEND_URL + "admin/player", {
      params: { international, nationality },
    });
    if (team === 1) {
      setplayers1Called(true);
    }
    if (team === 2) {
      setplayers2Called(true);
    }

    setplayers([...players, ...res.data.data]);
  };

  const handleCreateComp = async (e) => {
    e.preventDefault();
    const payload = {
      seriesName: seriesName,
      matchName: matchName,
      venue: venue,
      international: international,
      team1: { teamid: team1, captainIndex: capt1, playersList: selectedTeam1 },
      team2: { teamid: team2, captainIndex: capt2, playersList: selectedTeam2 },
      sportId: selectedsport,
    };

    console.log(payload);

    const res = await axios.post(
      BACKEND_URL + "admin/createcompetition",
      payload
    );
    console.log(res);
    e.target.reset();
  };

  // console.log("s1", selectedTeam1, "s2", selectedTeam2);

  return (
    <form onSubmit={handleCreateComp}>
      <div className="p-4 w-full">
        <SelectSquad
          selectSquadModal={selectSquadModal}
          setselectSquadModal={setselectSquadModal}
          teamId1={team1}
          teamId2={team2}
          playersList={players}
          selectedTeam1={selectedTeam1}
          selectedTeam2={selectedTeam2}
          setselectedTeam1={setselectedTeam1}
          setselectedTeam2={setselectedTeam2}
        />
        <div className="flex items-center gap-6 mt-5">
          <h1 className="text-4xl font-normal text-gray-theme whitespace-nowrap">
            Create Competitions
          </h1>
          <div className="w-full h-[1px] bg-slate-400"></div>
        </div>
        <div className="w-full flex justify-end">
          {sportdropdown && (
            <div
              className="w-full h-screen absolute top-0 left-0"
              onClick={() => {
                setsportdropdown(false);
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
                setsportdropdown(true);
                await callSports();
              }}
            >
              {selectedsport !== "none"
                ? { ...sportList.find((s) => s._id === selectedsport) }
                    .sportName
                : "Select Sport"}
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

            {sportdropdown && (
              <div
                class="absolute z-10 left-0 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {sportList.length ? (
                  sportList.map((s, i) => {
                    return (
                      <div
                        key={i}
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={() => {
                          setselectedsport(s._id);
                          setsportdropdown(false);
                        }}
                      >
                        {s.sportName}
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
          <InputField
            label={"Series Name"}
            type={"text"}
            id={"seriesName"}
            onChange={(e) => {
              setseriesName(e.target.value);
            }}
            value={seriesName}
          />
          <InputField
            label={"Match Name"}
            type={"text"}
            id={"matchName"}
            onChange={(e) => {
              setmatchName(e.target.value);
            }}
            value={matchName}
          />
          <InputField
            label={"Venue"}
            type={"text"}
            id={"venue"}
            onChange={(e) => {
              setvenue(e.target.value);
            }}
            value={venue}
          />
          <RadioButtons
            btnArr={["International", "Domestic"]}
            setinternational={setinternational}
          />

          <div>
            <div className="relative">
              {team1.length === 24 && (
                <img
                  src={{ ...teams.find((x) => x._id === team1) }.teamflagURL}
                  alt=""
                  className="absolute z-10 top-1/2 right-3 -translate-y-1/2 w-10 h-10 object-cover rounded-full"
                />
              )}
              <InputField
                label={"Team1"}
                type={"text"}
                id={"team1"}
                onChange={(e) => {
                  setteam1(e.target.value);
                  // turn the dropdown off on empty textbox
                  if (e.target.value !== "") {
                    setteamdropdown1("on");
                  } else {
                    setteamdropdown1("off");
                  }
                  // set suggestions
                  setsearchteams(
                    teams.filter(
                      (x) =>
                        x.name.toLowerCase().includes(e.target.value) &&
                        x._id !== team2
                    )
                  );
                }}
                value={
                  // find out the name of the selected team and put it here
                  teams.length && team1 !== ""
                    ? { ...teams.find((x) => x._id === team1) }.name
                    : ""
                }
              />
              {teamdropdown1 === "on" && (
                <div
                  className="absolute z-10 left-0 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {searchteam.map((v, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={async () => {
                          setteam1(v._id);
                          setteamdropdown1("off");
                          await callPlayers(v._id, 1);
                        }}
                      >
                        <img
                          src={`${v.teamflagURL}`}
                          alt=""
                          className="w-10 h-10 object-cover rounded-full"
                        />
                        <p className="text-xl ml-2">{v.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="relative">
              {team2.length === 24 && (
                <img
                  src={{ ...teams.find((x) => x._id === team2) }.teamflagURL}
                  alt=""
                  className="absolute z-10 top-1/2 right-3 -translate-y-1/2 w-10 h-10 object-cover rounded-full"
                />
              )}
              <InputField
                label={"Team2"}
                type={"text"}
                id={"team2"}
                onChange={(e) => {
                  setteam2(e.target.value);
                  if (e.target.value !== "") {
                    setteamdropdown2("on");
                  } else {
                    setteamdropdown2("off");
                  }
                  setsearchteams(
                    teams.filter(
                      (x) =>
                        x.name.toLowerCase().includes(e.target.value) &&
                        x._id !== team1
                    )
                  );
                }}
                value={
                  teams.length && team2 !== ""
                    ? { ...teams.find((x) => x._id === team2) }.name
                    : ""
                }
              />
              {teamdropdown2 === "on" && (
                <div
                  className="absolute z-10 left-0 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {searchteam.map((v, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={async () => {
                          setteam2(v._id);
                          setteamdropdown2("off");
                          await callPlayers(v._id, 2);
                        }}
                      >
                        <img
                          src={`${v.teamflagURL}`}
                          alt=""
                          className="w-10 h-10 object-cover rounded-full"
                        />
                        <p className="text-xl ml-2">{v.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {players2Called && selectSquadBtn()}
          </div>
          {/* player section */}
        </div>
        <button
          type="submit"
          className="my-4 p-4 bg-purple-theme font-semibold text-white rounded-md"
        >
          Create Competition
        </button>
      </div>
    </form>
  );
};

export default CreateCompetitions;
