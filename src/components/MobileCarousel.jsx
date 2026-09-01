import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";

export default function MobileCarousel({
  children,
  effectType = "fade", // "fade" | "cube" | "coverflow"
}) {
  const effectConfig = {
    fade: {
      effect: "fade",
      modules: [Pagination, Autoplay, EffectFade],
    },
    cube: {
      effect: "cube",
      modules: [Pagination, Autoplay, EffectCube],
    },
    coverflow: {
      effect: "coverflow",
      modules: [Pagination, Autoplay, EffectCoverflow],
    },
  };

  const selected = effectConfig[effectType];

  return (
<Swiper
  modules={selected.modules}
  effect={selected.effect}
  slidesPerView={1}
  spaceBetween={0}
  centeredSlides={true}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  speed={600}
  className="pb-12"
>
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
