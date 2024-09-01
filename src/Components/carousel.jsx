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
          <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 3" />
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
          <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Thumbnail 3" />
        </SplideSlide>
      </Splide>
      </div>
    </div>
  );
};

export default ThumbnailSlider;
