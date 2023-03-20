import ButtonGroup from "@/components/ButtonGroup";
import CompetitionCard from "@/components/dailyCompetitions/CompetitionCard";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useTimer } from "react-timer-hook";

const Index = () => {
  const screenName = useSelector((state) => state.UImainslice.main.screenName);
  const router = useRouter();
  return (
    <>
      <AnimatePresence>
        {screenName === "myleagues" && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
          >
            {/* top Info */}
            <div className="w-full theme-gradient cursor-default mt-1 px-3 py-2">
              <div className="flex items-center">
                <p className="text-yellow-theme text-xl font-bold w-[55%]">
                  My Leagues
                </p>
                <div className="w-full h-[1px] bg-yellow-theme"></div>
              </div>
            </div>
            {/* top Info */}

            {/* ButtonGroup */}
            <div className="my-1 px-6">
              <ButtonGroup />
            </div>
            {/* ButtonGroup */}

            <div className="h-[calc((100vh-137px)-85px)] w-full px-3 overflow-y-scroll">
              <CompetitionCard
                isLeagueComp={true}
                myLeaguesCard={true}
                isHotMatch={false}
                timeleft={5000}
              />
              <CompetitionCard
                isLeagueComp={true}
                myLeaguesCard={true}
                isHotMatch={false}
                timeleft={70000}
              />
              <CompetitionCard
                isLeagueComp={false}
                myLeaguesCard={true}
                isHotMatch={false}
                timeleft={56000}
              />
              <CompetitionCard
                isLeagueComp={false}
                myLeaguesCard={true}
                isHotMatch={false}
                timeleft={56000}
              />
              <CompetitionCard
                isLeagueComp={true}
                myLeaguesCard={true}
                isHotMatch={false}
                timeleft={54000}
              />
              <CompetitionCard
                isLeagueComp={true}
                myLeaguesCard={true}
                isHotMatch={false}
                timeleft={54000}
              />
              <CompetitionCard
                isLeagueComp={true}
                myLeaguesCard={true}
                isHotMatch={false}
                timeleft={54000}
              />
              <CompetitionCard
                isLeagueComp={true}
                myLeaguesCard={true}
                isHotMatch={false}
                timeleft={54000}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
