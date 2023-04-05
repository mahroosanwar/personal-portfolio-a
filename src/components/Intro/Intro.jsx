import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import ProfilePIC2 from "../../img/ProfilePIC2.png";
import glassesemoji from "../../img/glassesemoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {Link} from 'react-scroll';

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Mahroos Anwar</span>
          <span>I am Frontend Developer and I love my work</span>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/mahroosanwar" target="_blank" rel="noreferrer">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/mahroosanwar/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/mahroosanwar/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={ProfilePIC2} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesemoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "60%" }}
          className="floating-div"
        >
          <FloatingDiv image={crown} txt1="Frontend" txt2="Web Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best" txt2="Design" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
