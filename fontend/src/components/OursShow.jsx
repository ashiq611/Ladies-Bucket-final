// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination } from "swiper/modules";

const OursShow = () => {
  return (
    <div className="container mx-auto hidden lg:block">
      <h3 className="text-3xl text-[#C50076] font-mono font-bold text-center mt-5 mb-5">
        Ladies-Bucket Super Customer
      </h3>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[EffectCards, Pagination]}
        className="mySwiper swiper1 rounded-lg"
      >
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/19899569/pexels-photo-19899569/free-photo-of-a-black-and-white-photo-of-a-bride-and-groom.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/11805101/pexels-photo-11805101.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/19899495/pexels-photo-19899495/free-photo-of-panjabi-wedding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/19899602/pexels-photo-19899602/free-photo-of-couple-bride-and-groom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default OursShow;
