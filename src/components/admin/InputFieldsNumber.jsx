import { useState } from "react";

const NumberInputField = ({ label, setterFunction, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(rest.value || 0);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur(event) {
    setIsFocused(!!event.target.value);
  }

  function handleIncrease() {
    setValue(value + rest.numberOffset);
    setterFunction(value);
    // rest.onChange && rest.onChange(value + 1);
  }

  function handleDecrease() {
    if (value > 0) {
      setValue(value - rest.numberOffset);
      setterFunction(value);
    }
    // rest.onChange && rest.onChange(value - 1);
  }

  return (
    <div className="flex items-center flex-col">
      <div className="relative w-full">
        <label
          className={`absolute top-1/2 left-2 -translate-y-1/2 text-gray-500 text-lg transition-all ${
            isFocused || (rest.value ? rest.value : value) > 0
              ? "text-xs top-[7px] translate-y-0"
              : ""
          }`}
          htmlFor={rest.id}
        >
          {label}
        </label>
        <input
          type="number"
          className="flex-1 w-full text-lg pt-5 pb-2 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-theme focus:border-purple-theme"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="off"
          value={!rest.value ? (value === 0 ? "" : value) : rest.value}
          onChange={(e) => {
            !rest.onChange ? setValue(Number(e.target.value)) : rest.onChange;
          }}
          {...rest}
        />
      </div>
      <div className="grid grid-cols-2 w-full gap-5 mt-2">
        <button
          type="button"
          className="text-gray-500 w-full text-lg py-0 px-2 border border-gray-300 rounded-l-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-theme focus:border-purple-theme"
          onClick={!rest.handleDecrease ? handleDecrease : rest.handleDecrease}
        >
          &#8722;
        </button>
        <button
          type="button"
          className="text-gray-500 w-full text-lg py-0 px-2 border border-gray-300 rounded-r-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-theme focus:border-purple-theme"
          onClick={!rest.handleIncrease ? handleIncrease : rest.handleIncrease}
        >
          &#43;
        </button>
      </div>
    </div>
  );
};

export default NumberInputField;
