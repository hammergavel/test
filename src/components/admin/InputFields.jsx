const { useState } = require("react");

const InputField = ({ label, type, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur(event) {
    setIsFocused(!!event.target.value);
  }

  return (
    <div className="relative">
      <label
        className={`absolute top-1/2 left-2 -translate-y-1/2 text-gray-500 text-lg transition-all ${
          isFocused || rest.value ? "text-xs top-[7px] translate-y-0" : ""
        }`}
        htmlFor={rest.id}
      >
        {label}
      </label>
      <input
        type={type}
        className="w-full text-lg pt-5 pb-2 px-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-theme focus:border-purple-theme"
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
        {...rest}
      />
    </div>
  );
};
export default InputField;
