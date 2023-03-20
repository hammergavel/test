import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { useTimer } from "react-timer-hook";

export function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="border text-center w-[28%] border-orange-theme text-orange-theme font-bold text-[10px] px-2 py-[1px] rounded-md">
      {days * 24 + hours}h:{minutes}m:{seconds}s
    </div>
  );
}

const CompetitionCard = ({
  isHotMatch,
  isLeagueComp,
  myLeaguesCard,
  timeleft,
  ...rest
}) => {
  const time = new Date();
  const { seriesName, matchName, team1, team2, venue, compId } = { ...rest };

  console.log(team1);
  console.log(team2);

  time.setSeconds(time.getSeconds() + timeleft);
  return (
    <>
      {!isHotMatch ? (
        isLeagueComp ? (
          myLeaguesCard ? (
            <Link
              href={{ pathname: "competitions/[compid]", query: { compid: 1 } }}
            >
              <div
                id="competitionCard"
                className="w-full flex h-[7rem] bg-white drop-shadow-md rounded-md my-1 transition-transform active:scale-[1.02] ease-out delay-[0s] cursor-default"
              >
                <div className="w-[85%] mx-1 h-full flex flex-col justify-between py-2">
                  <div className="text-center text-md font-semibold text-darkblue-theme">
                    Pakistan Super League
                    <p className="text-center text-[9px] font-light leading-[7px]">
                      8 Feb - 13 Mar
                    </p>
                  </div>
                  <div className="flex items-center justify-between my-2">
                    <div className="flex flex-wrap justify-between max-w-[7rem] rounded-full p-[1px]">
                      <img
                        src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                        className="leaguesTeam h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                      ></img>
                      <img
                        src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                        className="leaguesTeamRight h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                      ></img>
                      <img
                        src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                        className="leaguesTeamRight h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                      ></img>
                      <img
                        src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                        className="leaguesTeamRight h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                      ></img>
                      <img
                        src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                        className="leaguesTeamRight h-[30px] w-[30px] rounded-full object-cover outline outline-2 outline-white"
                      ></img>
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
                  <div className="text-center font-medium text-[10px]">
                    The Oval
                  </div>
                </div>
                <div className="h-full w-[15%] bg-darkblue-theme flex flex-col items-center justify-center text-yellow-theme text-4xl font-medium">
                  5<p className="font-normal text-[10px] leading-5">Auctions</p>
                  <IoIosArrowForward className="text-yellow-theme text-base" />
                </div>
              </div>
            </Link>
          ) : (
            <Link
              href={{ pathname: "competitions/[compid]", query: { compid: 1 } }}
            >
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
                <div className="text-center font-medium text-[10px]">
                  The Oval
                </div>
              </div>
            </Link>
          )
        ) : myLeaguesCard ? (
          <Link
            href={{ pathname: "competitions/[compid]", query: { compid: 1 } }}
          >
            <div className="w-full flex h-[7rem] bg-white drop-shadow-md rounded-md my-1 transition-transform active:scale-[1.02] ease-out delay-[0s] cursor-default">
              <div className="w-[85%] mx-1 h-full flex flex-col justify-between py-2 px-3">
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
              <div className="h-full w-[15%] bg-darkblue-theme flex flex-col items-center justify-center text-yellow-theme text-4xl font-medium">
                5<p className="font-normal text-[10px] leading-5">Auctions</p>
                <IoIosArrowForward className="text-yellow-theme text-base" />
              </div>
            </div>
          </Link>
        ) : (
          <Link
            href={{
              pathname: "competitions/[compid]",
              query: { compid: compId },
            }}
          >
            <div className="w-full h-[7rem] flex flex-col justify-between bg-white drop-shadow-md rounded-md px-6 py-2 my-1 transition-transform active:scale-[1.02] ease-out delay-[0s] cursor-default">
              <div className="text-center text-[8px] text-darkblue-theme">
                {seriesName}
                <p className="font-semibold text-[10px] leading-[7px]">
                  {matchName}
                </p>
              </div>
              <div className="flex items-center justify-between my-2">
                <div className="flex items-center justify-between w-[5rem] theme-gradient rounded-full p-[1px]">
                  <div className="flex justify-center w-full text-xl font-semibold text-white">
                    {team1.teamid.name.toUpperCase().substring(0, 3)}
                  </div>
                  <img
                    src={team1.teamid.teamflagURL}
                    className="h-[30px] w-[30px] rounded-full object-cover"
                  ></img>
                </div>
                {/* Time Here */}
                <MyTimer expiryTimestamp={time} />
                <div className="flex items-center justify-between w-[5rem] theme-gradient rounded-full p-[1px]">
                  <img
                    src={team2.teamid.teamflagURL}
                    className="h-[30px] w-[30px] rounded-full object-cover"
                  ></img>
                  <div className="flex justify-center w-full text-xl font-semibold text-white">
                    {team2.teamid.name.toUpperCase().substring(0, 3)}
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-[10px]">
                The Oval
              </div>
            </div>
          </Link>
        )
      ) : (
        <Link
          href={{ pathname: "competitions/[compid]", query: { compid: 1 } }}
        >
          <div className="w-full flex flex-col items-center theme-gradient drop-shadow-md rounded-md px-6 py-3 my-1 transition-transform active:scale-[1.02] ease-out delay-[0s] cursor-default">
            <div className="text-center text-[10px] text-white">
              Natwest ODI Series
              <p className="font-semibold text-[14px] leading-[12px]">
                Match 1
              </p>
            </div>
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center justify-between w-[7rem] rounded-full p-[1px]">
                <div className="flex justify-center w-full text-3xl font-semibold text-white">
                  IND
                </div>
                <img
                  src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                  className="h-[40px] w-[40px] rounded-full object-cover"
                ></img>
              </div>
              <p className="text-2xl text-white mx-5">VS</p>
              <div className="flex items-center justify-between w-[7rem] rounded-full p-[1px]">
                <img
                  src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                  className="h-[40px] w-[40px] rounded-full object-cover"
                ></img>
                <div className="flex justify-center w-full text-3xl font-semibold text-white">
                  ENG
                </div>
              </div>
            </div>
            <div className="text-center font-medium text-[10px] text-white mb-2">
              The Oval
            </div>
            {/* Time Here */}
            <MyTimer expiryTimestamp={time} />
          </div>
        </Link>
      )}
    </>
  );
};

export default CompetitionCard;
