import CompetitionCard from "./CompetitionCard";

const CompetitionsList = () => {
  return (
    <div className="px-3 mt-2 w-full h-[calc((100vh-188px)-94px)] overflow-y-scroll">
      <CompetitionCard timeleft={40901} isHotMatch={true} />
      <CompetitionCard
        timeleft={40901}
        isLeagueComp={false}
        myLeaguesCard={false}
      />
      <CompetitionCard timeleft={40901} />
      <CompetitionCard timeleft={40901} />
      <CompetitionCard timeleft={40901} />
      <CompetitionCard timeleft={40901} />
      <CompetitionCard timeleft={40901} />
      <CompetitionCard timeleft={40901} />
    </div>
  );
};

export default CompetitionsList;
