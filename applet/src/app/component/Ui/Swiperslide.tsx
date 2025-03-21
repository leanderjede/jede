'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ServiceSlide = () => {
  return (
    <div className="w-full   ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg overflow-hidden"
      >
        <SwiperSlide>
          <img src="/1.png" alt="Slide 1" className="w-full  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/2.png" alt="Slide 2" className="w-full  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/3.png" alt="Slide 3" className="w-full  object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceSlide;
