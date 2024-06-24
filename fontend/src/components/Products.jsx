// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import p1 from "../assets/product details & Design/LBBDPF6000.01.jpeg";
import p2 from "../assets/product details & Design/LBBDPF6003.02.jpeg";
import p3 from "../assets/product details & Design/LBBDMKF5012.03.jpeg";
import p4 from "../assets/product details & Design/LBBDMKF5012.04.jpeg";
import p5 from "../assets/product details & Design/LBBDMKF5012.05.jpeg";
import p6 from "../assets/product details & Design/LBBDMKF5022.06.jpeg";

const Products = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-2 container mx-auto"
      >
        <SwiperSlide>
          <div className="card lg:card-side  bg-base-100 shadow-xl">
            <figure>
              <img
                src={p1}
                alt="Album"
                className="w-full lg:h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm lg:text-lg">
                New album is released!
              </h2>
              <p className="text-sm lg:text-base">
                $60 <span className="line-through">$80</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="text-primary"> 50% off</span>
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={p2}
                alt="Album"
                className="w-full lg:h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p className="text-sm lg:text-base">
                $60 <span className="line-through">$80</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="text-primary"> 50% off</span>
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={p3}
                alt="Album"
                className="w-full lg:h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p className="text-sm lg:text-base">
                $60 <span className="line-through">$80</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="text-primary"> 50% off</span>
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={p4}
                alt="Album"
                className="w-full lg:h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p className="text-sm lg:text-base">
                $60 <span className="line-through">$80</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="text-primary"> 50% off</span>
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={p5}
                alt="Album"
                className="w-full lg:h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p className="text-sm lg:text-base">
                $60 <span className="line-through">$80</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="text-primary"> 50% off</span>
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={p6}
                alt="Album"
                className="w-full lg:h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p className="text-sm lg:text-base">
                $60 <span className="line-through">$80</span>
              </p>
              <p className="text-sm lg:text-base">
                <span className="text-primary"> 50% off</span>
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Products;
