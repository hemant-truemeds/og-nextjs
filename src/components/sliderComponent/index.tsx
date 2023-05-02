import React from "react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  // Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "@images/sliderImg1.webp";
import img2 from "@images/sliderImg2.webp";
import img3 from "@images/sliderImg3.webp";
import img4 from "@images/sliderImg4.webp";
import Image from "next/image";
import styles from "./slider.module.scss";

SwiperCore.use([EffectCoverflow, Pagination]);

interface IProps {
  banners: any;
}

const SliderComponents = (props: IProps) => {
  const { banners } = props;
  return (
    <div className={styles.swiperModalWrapper}>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        keyboard={true}
        loop
        modules={[Navigation, Pagination, A11y, Keyboard]}
      >
        {banners?.map((item: any, index: number) => {
          return (
            <SwiperSlide key={item?.id}>
              <div className={styles.unsetImage}>
                <Image
                  {...(index === 0 ? { priority: true } : { loading: "lazy" })}
                  width="700"
                  height="400"
                  objectFit="contain"
                  className={styles.customImage}
                  src={item?.image}
                  alt=""
                  // width={500}
                  // height={300}
                />
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <Image loading="lazy" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image loading="lazy" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image loading="lazy" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image loading="lazy" src={img4} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default SliderComponents;
