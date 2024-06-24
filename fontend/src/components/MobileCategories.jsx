import c1 from "../assets/T-Shirt.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

const MobileCategories = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Clothing">
            <div className="flex flex-col items-center">
              <img src={c1} alt="" className="w-6" />
              <p>Accesseories</p>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
    // <div className="flex flex-wrap gap-2 p-2 bg-[#FFFBFB] border bottom-2 border-[#FF44CB] ">
    //   <div className="flex flex-col items-center">
    //     <img src={c1} alt="" className="w-6" />
    //     <p>Accesseories</p>
    //   </div>
    //   <div className="flex flex-col items-center">
    //     <img src={c1} alt="" className="w-6" />
    //     <p>Accesseories</p>
    //   </div>
    // </div>
  );
};

export default MobileCategories;
