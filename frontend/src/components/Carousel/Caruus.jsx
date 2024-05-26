import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";
export const Caruus = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToScroll: 1,
    className: "center",
  };
  return (
    <div>
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <img
              src="https://img.freepik.com/free-vector/crowdfunding-money-raising-international-internet-platforms-business-startup-charity-ideas-3-flat-horizontal-compositions-illustration_1284-29481.jpg?w=2000"
              alt=""
              srcSet=""
            />
          </div>
          <div>
            <img
              src="https://www.feedough.com/wp-content/uploads/2021/05/rewards-based-crowdfunding-808x455.webp"
              alt=""
              srcSet=""
            />
          </div>
          <div>
            <img
              src="https://i0.wp.com/ketto.blog/wp-content/uploads/2022/03/Crowdfunding-and-Economy.jpg?fit=1920%2C1153&ssl=1"
              alt=""
              srcSet=""
            />
          </div>
          <div>
            <img
              src="https://catapooolt.s3.ap-south-1.amazonaws.com/static/super-solver-banner.png"
              alt=""
              srcSet=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
