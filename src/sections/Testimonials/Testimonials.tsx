import React, { useState } from 'react';
import './Testimonials.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/swiper-vars.scss';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import { ReviewBlock } from '../../components/ReviewBlock';
import { reviews } from '../../mock';

SwiperCore.use([Navigation, Autoplay, Pagination]);

export const Testimonials: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  return (
    <div className="Testimonials" id="Testimonials">
      <div className="Testimonials__container">
        <div className="title Testimonials__title">What our customer are saying</div>
        <hr className="line Testimonials__line" />
        <Swiper
          onSwiper={(sw) => {
            setSwiperRef(sw);
          }}
          className="Testimonials__slider"
          slidesPerView={1}
          navigation={{
            prevEl: '.Testimonials__sliderNav__prev',
            nextEl: '.Testimonials__sliderNav__next',
          }}
          pagination={{
            el: '.Testimonials__sliderNav__pagination',
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          speed={3000}
          loop
        >
          {reviews.map((elem) => (
            <SwiperSlide
              key={elem.id}
              onMouseEnter={() => swiperRef?.autoplay.stop()}
              onMouseLeave={() => swiperRef?.autoplay.start()}
            >
              <ReviewBlock
                key={elem.id}
                name={elem.name}
                role={elem.role}
                review={elem.review}
                img={elem.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <img className="Testimonials__leftDots" src="img/bg-elements/light-dots.svg" alt="dots" />
      </div>
      <div className="Testimonials__sliderNav">
        <button className="Testimonials__sliderNav__prev" type="button">
          <div className="prev-arrow" />
        </button>
        <div className="Testimonials__sliderNav__pagination" />
        <button className="Testimonials__sliderNav__next" type="button">
          <div className="next-arrow" />
        </button>
      </div>
      <img className="Testimonials__rightDots" src="img/bg-elements/dots.svg" alt="dots" />
    </div>
  );
};
