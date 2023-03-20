import AuctionCard from "@/components/auctionList/AuctionCard";
import SliderButton from "@/components/SliderButton";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/Modal";
import JoinAuctionModal from "@/components/JoinAuctionModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuctions } from "@/store/auctionActions";

const AuctionRooms = () => {
  const router = useRouter();
  const { compid } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuctions(compid));
  }, []);

  const statecomps = useSelector((state) => state.competitionSlice.dailyComps);
  const competition = statecomps.find((e) => e._id === compid);
  const { seriesName, matchName, team1, team2, venue } = competition;

  const currentAuctions = useSelector((state) => state.auction.auctionList);
  console.log(currentAuctions);
  return (
    <>
      <div className="w-full theme-gradient mt-1 py-2">
        <div className="text-center text-[8px] text-white">
          {seriesName}
          <p className="font-semibold text-[12px] leading-[12px]">
            {matchName}
          </p>
        </div>
        <div className="flex items-center justify-evenly my-3">
          <div className="flex items-center justify-between w-[7rem] rounded-full p-[1px]">
            <div className="flex justify-center w-full text-3xl font-medium text-white">
              {team1.teamid.name.toUpperCase().substring(0, 3)}
            </div>
            <img
              src={team1.teamid.teamflagURL}
              className="h-[40px] w-[40px] rounded-full object-cover"
            ></img>
          </div>
          <p className="text-2xl text-white">VS</p>
          <div className="flex items-center justify-between w-[7rem] rounded-full p-[1px]">
            <img
              src={team2.teamid.teamflagURL}
              className="h-[40px] w-[40px] rounded-full object-cover"
            ></img>
            <div className="flex justify-center w-full text-3xl font-medium text-white">
              {team2.teamid.name.toUpperCase().substring(0, 3)}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 my-3">
        <SliderButton btn1={"Auctions"} btn2={"Players List"} />
      </div>

      <Modal>
        <JoinAuctionModal />
      </Modal>

      <motion.div
        className="px-4 h-[calc((100vh-227px)-75px)] overflow-y-scroll"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {currentAuctions.map((x, i) => {
          return (
            <motion.div
              key={i}
              className="mb-2 last:mb-[40px]"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
            >
              <AuctionCard details={x} />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AuctionRooms;
