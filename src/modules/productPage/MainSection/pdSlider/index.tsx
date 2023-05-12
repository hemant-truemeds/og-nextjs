import React from "react";
import Image from "next/image";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./pdSlider.module.scss";
import CustomImage from "@components/CutstomImage";

SwiperCore.use([EffectCoverflow, Pagination]);

interface IProps {
  product_image_urls: string;
}

const PdSlider: React.FC<IProps> = (props) => {
  const { product_image_urls } = props;

  // const prevNavRef = useRef(null);
  // const nextNavRef = useRef(null);
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      //   scrollbar={{ draggable: true }}
      keyboard={true}
      loop
      navigation
      // navigation={{
      //   prevEl: prevNavRef.current,
      //   nextEl: nextNavRef.current,
      // }}
      modules={[Navigation, A11y, Keyboard]}
    >
      {product_image_urls?.split(",")?.map((item: any, index: number) => {
        return (
          <SwiperSlide key={item}>
            <div className={styles.unsetImage}>
              <CustomImage
                priority
                width="300"
                height="200"
                objectFit="contain"
                className={styles.customImage}
                src={item}
                alt="slider image"
              />
            </div>
          </SwiperSlide>
        );
      })}
      {/* <div
        ref={prevNavRef}
        className={`swiper-button-prev ${styles.prevButton}`}
      ></div>
      <div
        ref={nextNavRef}
        className={`swiper-button-next ${styles.nextButton}`}
      ></div> */}
    </Swiper>
  );
};

export default PdSlider;
