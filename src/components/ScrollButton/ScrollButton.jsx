import React, { useState, useContext } from "react";
import { UilAngleUp } from "@iconscout/react-unicons";
import { themeContext } from "../../Context";

import "./ScrollButton.css";

const ScrollButton = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="scroll-button"
      onClick={scrollToTop}
      style={{
        display: visible ? "flex" : "none",
        backgroundColor: darkMode ? "white" : "",
      }}
    >
      <UilAngleUp />
    </div>
  );
};

export default ScrollButton;
