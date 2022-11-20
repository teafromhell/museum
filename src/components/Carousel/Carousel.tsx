import React from "react";
import News from '../../types/data'
import mockup_news from '../../mockup_news'
import styles from '../../styles/Carousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

interface HotPost extends News { }

function Carousel() {
  return (
    <Swiper
      breakpoints={{
        1024: {
          width: 1024,
          slidesPerView: 3,
          spaceBetween: 8
        },
        640: {
          width: 640,
          slidesPerView: 2,
          spaceBetween: 8
        },
        480: {
          width: 480,
          slidesPerView: 1,
          spaceBetween: 8
        }
      }}
      grabCursor
      modules={[Navigation]}
      navigation
      watchSlidesProgress
    >
      {mockup_news.map((item: HotPost) => {
        return (
          <SwiperSlide key={item.id}>
            <div className={styles.post}>
              <div className={styles.post_wrapper_img}>
                <img
                  className={styles.post_img}
                  src={item.img}
                  alt={JSON.stringify(item.img)}
                />
              </div>
              <div className={styles.post_bottom}>
                <p className={styles.post_title}>{item.title}</p>
                <p className={styles.post_date}>{item.date}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
}

export default Carousel
