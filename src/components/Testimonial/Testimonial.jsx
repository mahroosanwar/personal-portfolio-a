import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with Mahroos Anwar was a pleasure. He was an excellent team player and always went above and beyond to ensure that projects were completed on time and to a high standard. His attention to detail and ability to multitask made him a valuable asset to our team. I would highly recommend Mahroos Anwar for any future endeavors.",
    },
    {
      img: profilePic2,
      review:
        "I had the opportunity to work with Mahroos Anwar on a challenging project, and he was instrumental in ensuring its success. He brought a high level of professionalism, creativity, and critical thinking to the project, and I was impressed by his ability to work collaboratively with other team members.",
    },
    {
      img: profilePic3,
      review:
        "As a former supervisor of Mahroos Anwar, I can confidently say that he is one of the most dedicated and talented individuals I have had the pleasure of working with. He consistently demonstrated a strong work ethic, attention to detail, and a willingness to go above and beyond to ensure that projects were completed to a high standard.",
    },
    {
      img: profilePic4,
      review:
        "I had the pleasure of working with Mahroos Anwar for two years and was continually impressed by his work ethic, attention to detail, and ability to work well under pressure. He consistently produced high-quality work, met deadlines, and was a valuable member of our team.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
