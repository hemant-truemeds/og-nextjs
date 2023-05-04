import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "./mainSection.module.scss";

const MainSection = () => {
  const prevNavRef = useRef(null);
  const nextNavRef = useRef(null);

  return (
    <div className={styles.mainSectionWrapper}>
      <div className={styles.main_innerContainer}>
        <div className={styles.breadcrumb}>
          <span>
            <span className={styles.breadcrumbLink}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </span>
            <span className={styles.breadcrumbSeparator}>/</span>
          </span>
          <span>
            <span className={styles.breadcrumbLink}>Gemsoline Capsule 15</span>
            {/* <span className={styles.breadcrumbSeparator}>/</span> */}
          </span>
        </div>
        <div className={styles.productWrapper}>
          <div className={styles.imgSliderWrapper}>
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              keyboard={true}
              loop
              navigation={{
                prevEl: prevNavRef.current,
                nextEl: nextNavRef.current,
              }}
              // modules={[Navigation, Pagination, A11y, Keyboard]}
            >
              {/* {banners?.map((item: any, index: number) => {
                return (
                  <SwiperSlide key={item?.id}>
                    <div className={styles.unsetImage}>
                      <Image
                        {...([0, 1].includes(index)
                          ? { priority: true }
                          : { loading: "lazy" })}
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
              })} */}
              <div
                ref={prevNavRef}
                className={`swiper-button-prev ${styles.prevButton}`}
              ></div>
              <div
                ref={nextNavRef}
                className={`swiper-button-next ${styles.nextButton}`}
              ></div>
            </Swiper>
          </div>
          <div className={styles.productDetailsWrapper}></div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
