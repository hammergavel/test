import React from "react";

const Dropdowncomps = ({ ...rest }) => {
  const { team1Flag, team2Flag, team1, team2, series, match } = rest;
  return (
    <div className="flex items-center py-2">
      <div className="flex items-center justify-between w-[5rem] h-fit theme-gradient rounded-full p-[1px]">
        <div className="flex justify-center w-full text-xl font-semibold text-white">
          {team1.toUpperCase().substring(0, 3)}
        </div>
        <img
          src={team1Flag}
          className="h-[30px] w-[30px] rounded-full object-cover"
        ></img>
      </div>
      <div className="w-[60%] flex flex-col justify-center items-center">
        <div>{series}</div>
        <div className="text-lg">{match}</div>
      </div>
      <div className="flex items-center justify-between w-[5rem] h-fit theme-gradient rounded-full p-[1px]">
        <div className="flex justify-center w-full text-xl font-semibold text-white">
          {team2.toUpperCase().substring(0, 3)}
        </div>
        <img
          src={team2Flag}
          className="h-[30px] w-[30px] rounded-full object-cover"
        ></img>
      </div>
    </div>
  );
};

export default Dropdowncomps;
