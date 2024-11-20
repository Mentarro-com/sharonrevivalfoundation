import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const ThumbnailSlider = () => {
  let mainSlider;
  let thumbnailSlider;

  useEffect(() => {
    mainSlider.sync(thumbnailSlider.splide);
  }, []);

  return (
    <div className = "splide-main">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          pagination: false,
          arrows: true,
          focus: "center",
          width: '100%',
          fixedHeight: "470px",
          breakpoints: {
            600: {
              fixedHeight: "211px",
            },
          },
          autoplay : true,
          pauseOnHover: false,
        }}
        ref={(slider) => (mainSlider = slider)}
      >
        <SplideSlide>
          <img src="Carrom (2).jpg" alt="Thumbnail 1" />
        </SplideSlide>
        <SplideSlide>
          <img src = "Counselling_room.jpg" alt="Thumbnail 2" />
        </SplideSlide>
        <SplideSlide>
          <img src = "Hall.jpeg" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src = "Office_hall.jpg" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="Doctor.jpeg" alt="Thumbnail 3" />
        </SplideSlide>
      </Splide>
      <div className="splide-container">
      <Splide
        options={{
          fixedWidth: 200,
          fixedHeight: 100,
          arrows: false,
          gap: 20,
          rewind: true,
          pagination: false,
          cover: true,
          isNavigation: true,
          focus: "center",
          autoplay : true,
          pauseOnHover: false,
          breakpoints: {
            1200: {
              fixedWidth: 160,
              fixedHeight: 80,
            },
            900: {
              fixedWidth: 100,
              fixedHeight: 60,
            },
            600: {
              fixedWidth: 52,
              fixedHeight: 44,
            },
          },
        }}
        ref={(slider) => (thumbnailSlider = slider)}
        className="thumbnail-slider"
      >
        <SplideSlide>
          <img src="Carrom (2).jpg" alt="Thumbnail 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="Counselling_room.jpg" alt="Thumbnail 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="Hall.jpeg"  alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="Office_hall.jpg" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="Doctor.jpeg"  alt="Thumbnail 3" />
        </SplideSlide>
      </Splide>
      </div>
    </div>
  );
};

export default ThumbnailSlider;
