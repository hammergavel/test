import Advertising from "@/components/dailyCompetitions/Advertising";
import CapsuleButton from "@/components/dailyCompetitions/CapsuleButton";

import SelectSport from "@/components/SelectSport";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CompetitionCard from "@/components/dailyCompetitions/CompetitionCard";
import { fetchCompetitions } from "@/store/competitionActions";

const Competitions = () => {
  const competitions = useSelector(
    (state) => state.competitionSlice.dailyComps
  );
  console.log(competitions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompetitions());
  }, []);

  const comptype = useSelector(
    (state) => state.UIcompetitionSlice.competitionType
  );
  const screenName = useSelector((state) => state.UImainslice.main.screenName);
  const compType = useSelector(
    (state) => state.UIcompetitionSlice.competitionType.type
  );
  const selected = comptype.capsuleButton;
  return (
    <AnimatePresence>
      {screenName === "home" && (
        <motion.div initial={{ x: -400 }} animate={{ x: 0 }} exit={{ x: 400 }}>
          <SelectSport />
          {/* Advertising */}
          <Advertising />
          {/* Advertising */}

          <div className="flex w-full justify-between px-4">
            <CapsuleButton
              text="Daily Competitions"
              img="/pngicons/dailycompetitions.png"
              isDailySelected={selected[0]}
              selected={selected}
            />
            <CapsuleButton
              text="Leagues and Series"
              img="/pngicons/leaguesandseries.png"
              isDailySelected={selected[1]}
              selected={selected}
            />
          </div>

          {compType === "daily" ? (
            <AnimatePresence>
              <motion.div
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                exit={{ x: -400 }}
                className="px-3 mt-2 w-full h-[calc((100vh-188px)-94px)] overflow-y-scroll"
              >
                {!competitions.length ? (
                  <div>No Competitions to show</div>
                ) : (
                  competitions.map((comp, i) => {
                    const { _id, seriesName, matchName, team1, team2, venue } =
                      comp;
                    console.log(_id);
                    return (
                      <CompetitionCard
                        key={i}
                        timeleft={50902}
                        isLeagueComp={false}
                        seriesName={seriesName}
                        matchName={matchName}
                        team1={team1}
                        team2={team2}
                        venue={venue}
                        compId={_id}
                      />
                    );
                  })
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              className="px-3 mt-2 w-full h-[calc((100vh-188px)-94px)] overflow-y-scroll"
            >
              <CompetitionCard timeleft={50902} isLeagueComp={true} />
              <CompetitionCard timeleft={50902} isLeagueComp={true} />
              <CompetitionCard timeleft={50902} isLeagueComp={true} />
              <CompetitionCard timeleft={50902} isLeagueComp={true} />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Competitions;
