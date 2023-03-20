import { transform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import SportIcon from "./SportIcon";

const SelectSport = () => {
  // const [selected, setselected] = useState([true, false, false]);
  const selected = useSelector((state) => state.UIcompetitionSlice.sportCat);

  let factor = 0;
  for (let i = 0; i < selected.length; i++) {
    if (selected[i]) {
      factor = i;
    }
  }

  return (
    <>
      <div className="flex w-full py-1 justify-evenly cursor-pointer">
        <SportIcon
          img="/pngicons/cricket.png"
          text="Cricket"
          index={0}
          selected={selected[0]}
        />
        <SportIcon
          img="/pngicons/football.png"
          text="Football"
          index={1}
          selected={selected[1]}
        />
        <SportIcon
          img="/pngicons/kabbaddi.png"
          text="Kabaddi"
          index={2}
          selected={selected[2]}
        />
      </div>
      <div
        className="w-[40px] h-[1px] mx-[17%] bg-red-theme translate-x-0 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${272 * factor}%,0%)` }}
      ></div>
    </>
  );
};

export default SelectSport;
