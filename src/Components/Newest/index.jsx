import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/swiper-bundle.css";
import { ProductItems } from '../ProductItems';
import data from "../../backend/prod.json";
import * as S from "./style";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

function News() {

    const newData = data.product;
    return (
        <S.Container>
          <S.Slider>
        <Swiper
          tag="section"
          wrapperTag="div"
          slidesPerView={5}
          spaceBetween={16}
          loop={true}
          speed={1000}
          navigation={true}
          centeredSlides={true}
          className="mySwiper"
        >
          <>
            {newData.map((data) => {
              return (
                <SwiperSlide tag="div" key={data.id}>
                  <S.Card>
                   <ProductItems key={data.id} data={data}/> 
                   </S.Card>
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
        </S.Slider>
        </S.Container>
    )
}

export default News;