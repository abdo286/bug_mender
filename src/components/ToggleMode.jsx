import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleMode = ({ scrolling }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="relative">
      <label
        className={`swap swap-rotate relative top-1 ${
          isDarkMode ? "bg-gray-800" : "bg-blue-500"
        }`}
      >
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={handleToggle} />

        {/* sun icon */}
        <FaSun
          className={`swap-on absolute top-0 left-0 w-7 h-7 ${
            scrolling ? "text-gray-800" : "text-blue-500"
          } transition duration-500 ease-in-out ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* moon icon */}
        <FaMoon
          className={`swap-off absolute top-0 left-0 w-7 h-7 ${
            scrolling ? "text-gray-800" : "text-blue-500"
          } transition duration-500 ease-in-out ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
        />
      </label>
    </div>
  );
};

export default ToggleMode;
