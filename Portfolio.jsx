import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Tarraf from "../../img/tarraf.jpeg";
import Music from "../../img/music.jpg";
import Realstate from "../../img/realstate.jpeg";
import Agenzia from "../../img/agenzia.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Progetti di</span>
      <span>Portafoglio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Tarraf} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Music} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Agenzia} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Realstate} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
