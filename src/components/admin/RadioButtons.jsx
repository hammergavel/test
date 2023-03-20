import React, { useState } from "react";

const RadioButtons = ({ btnArr, setinternational }) => {
  const [selectedOption, setSelectedOption] = useState(btnArr[0]);
  if (selectedOption === btnArr[0]) {
    setinternational(true);
  } else {
    setinternational(false);
  }

  return (
    <div className="flex gap-3">
      {btnArr.map((e, index) => {
        return (
          <div
            key={index}
            onClick={async () => {
              setSelectedOption(e);
            }}
            className={`transition-colors ${
              selectedOption === e &&
              "border-gray-600 text-gray-600 hover:border-gray-600 hover:text-gray-600"
            } cursor-pointer border-2 border-gray-300 rounded-lg w-1/2 flex items-center justify-center text-xl text-gray-300 font-semibold hover:border-gray-400 hover:text-gray-400`}
          >
            <span>{e}</span>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;
