import { useState } from "react";

const TimeInputField = ({ label, setterFunction, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(rest.value || new Date());

  // console.log("Date", value);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur(event) {
    setIsFocused(!!event.target.value);
  }

  return (
    <div className="flex items-center flex-col">
      <div className="relative w-full">
        <label
          className={`absolute text-xs top-[7px] translate-y-0 left-2 text-gray-500 transition-all`}
          htmlFor={rest.id}
        >
          {label}
        </label>
        {rest.date ? (
          <input
            type="date"
            className="flex-1 w-full text-lg pt-5 pb-2 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-theme focus:border-purple-theme"
            onFocus={handleFocus}
            placeholder=""
            onBlur={handleBlur}
            autoComplete="off"
            value={!rest.value ? value : rest.value}
            onChange={(e) => {
              !rest.onChange ? setValue(e.target.value) : rest.onChange;
            }}
            {...rest}
          />
        ) : (
          <input
            type="time"
            className="flex-1 w-full text-lg pt-5 pb-2 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-theme focus:border-purple-theme"
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
            value={!rest.value ? value : rest.value}
            onChange={(e) => {
              !rest.onChange ? setValue(e.target.value) : rest.onChange;
            }}
            {...rest}
          />
        )}
      </div>
    </div>
  );
};

export default TimeInputField;
