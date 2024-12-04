/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-screen h-screen ${
        theme === "light" ? "bg-gray-300 text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h1>
        Now you are switched to <span className="font-extrabold">{theme}</span>
      </h1>
    </div>
  );
};

export default Content;
