import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        className={styles.swiper}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <img src="/temp/banner1.png" alt="banner combo 1" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/temp/banner2.png" alt="banner dose dupla" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
