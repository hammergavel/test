import { useState } from "react";

const SliderButton = ({ btn1, btn2 }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex items-center w-full h-[5vh] rounded-full slow-theme-gradient relative cursor-default">
      <p
        className=" text-sm w-1/2 text-center z-10 transition-colors"
        style={{ color: `${selected === 0 ? "#FDC52C" : "#616166"}` }}
        onClick={() => {
          setSelected(0);
        }}
      >
        {btn1}
      </p>
      <p
        className="text-sm w-1/2 text-center z-10 transition-colors"
        style={{ color: `${selected === 0 ? "#616166" : "#FDC52C"}` }}
        onClick={() => {
          setSelected(1);
        }}
      >
        {btn2}
      </p>
      <div
        className="w-1/2 h-full theme-gradient rounded-full flex items-center justify-center absolute transition-transform ease-out duration-200"
        style={{ transform: `translate(${100 * selected}%,0)` }}
      ></div>
    </div>
  );
};

export default SliderButton;
