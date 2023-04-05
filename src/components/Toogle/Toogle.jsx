import React, { useContext } from "react";
import "./Toogle.css";
import { UilSun } from "@iconscout/react-unicons";
import { UilMoon } from '@iconscout/react-unicons';
import { themeContext } from "../../Context";

const Toogle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <UilMoon />
      <UilSun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toogle;
