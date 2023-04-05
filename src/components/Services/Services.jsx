import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
// import Resume from '../../img/Mahroos_Anwar_Resume_3.pdf'
// import DownloadButton from "../DownloadButton/DownloadButton";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awsome</span>
        <span>Services</span>
        <span>
          I am a highly motivated, detail-oriented front-end developer who is
          <br />
          passionate about creating engaging and visually appealing web
          <br />
          experiences. Please feel free to contact me if you have any further
          <br />
          questions or would like to discuss your front-end development needs.
        </span>
        <a
          href="https://docs.google.com/document/d/1yAkKaOrQagOJMs4k1wCk-Jswq2A-Qvf_RjsQlX5BTCE/edit?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button s-button">Download CV</button>
        </a>
        {/* <DownloadButton /> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"UI/UX"}
            detail={"Figma, Canva, FramerMotion, IconScout"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Responsive design"}
            detail={
              "optimized for different devices, such as desktops, tablets, and smartphones"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
