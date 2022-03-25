import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/swiper-bundle.css";
import  data from '../../backend/db.json'
//import "./style.css";
import * as S from './style'
import Post from "../Post";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

export const Slider = () => {
  
    const newData = data.info;
  return (
    <>
      <S.Container>
        <S.Slider>
        <Swiper
          tag="section"
          wrapperTag="ul"
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          speed={1000}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          className="mySwiper"
        >
          <>
            {newData.map((info) => {
              return (
                <SwiperSlide tag="li" key={info.id}>
                    <Post data={info} />
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
        </S.Slider>
      </S.Container>
    </>
  );
};
