import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";

import "./Portfolio.css";
import "swiper/css";

import Sparqo from "../../img/Sparqo.png";
import Carzen from "../../img/Carzen.png";
import FoodOrderApp from "../../img/FoodOrderApp.png";
import NextjsMeetups from "../../img/NextjsMeetups.png";
import JSDocumentation from "../../img/JSDocumentation.png";
import GreatQuotes from "../../img/GreatQuotes.png";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span>Portfolio</span>
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://docs.google.com/document/d/12CIaq0KuPaVUQBxFnsPSv02jZVh3fydHdVTC5yfML3Q/edit" target="_blank" rel="noreferrer">
            <img src={Sparqo} alt="Sparqo" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://carzen.vercel.app/" target="_blank" rel="noreferrer">
            <img src={Carzen} alt="Carzen" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://quotes-react-router-bd7b8.web.app/quotes?sort=decs"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GreatQuotes} alt="Great Qoutes Project" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://master--food-order-app-los-pollos-hermanos.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FoodOrderApp} alt="Food Order App Project" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://nextjs-meetup-wep.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={NextjsMeetups} alt="NextJs Meetup Project" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://codepen.io/mahroosanwar/full/QWaXGeE"
            target="_blank"
            rel="noreferrer"
          >
            <img src={JSDocumentation} alt="JS Documentation" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
