import React, { useRef, useState } from "react";
import "./testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper";
import "swiper/css/pagination";
// import "./styles.css";

import AVTR1 from "../../assets/Alan-Senderovich.png";

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "Mike Simpson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti molestiae ipsam sit dignissimos quia eligendi iure ame eaque vero dolore nobis tempora modi sint a itaque ullam",
  },
  {
    id: 2,
    avatar: AVTR1,
    name: "Mike Simpson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti molestiae ipsam sit dignissimos quia eligendi iure ame eaque vero dolore nobis tempora modi sint a itaque ullam",
  },
  {
    id: 3,
    avatar: AVTR1,
    name: "Mike Simpson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti molestiae ipsam sit dignissimos quia eligendi iure ame eaque vero dolore nobis tempora modi sint a itaque ullam",
  },
  {
    id: 4,
    avatar: AVTR1,
    name: "Mike Simpson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corrupti molestiae ipsam sit dignissimos quia eligendi iure ame eaque vero dolore nobis tempora modi sint a itaque ullam",
  },
];

const Testimonials = () => {
  console.log("data", data);
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={40}
        modules={[Pagination]}
        className="mySwiper container testimonials__container"
        // className="container testimonials__container"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id} className="testimonial">
              <div className="client__avatar">
                <img src={item.avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
