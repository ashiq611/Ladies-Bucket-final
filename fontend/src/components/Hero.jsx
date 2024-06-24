
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import c1 from "../assets/image 4.png";

import c3 from "../assets/image 6.png";

import { Link, useNavigate } from "react-router-dom";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import Categories from "./Categories";
import MobileCategories from "./MobileCategories";
import UseProduct from "../Hooks/useProduct";
import { useState } from "react";

const Hero = () => {
  const { products, setFilteredProducts } = UseProduct()
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate()
  const handelSearch = () => {
    // Handle the click event based on the category
    console.log(products)
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase())

    )
    setFilteredProducts(filtered)
    setSearchQuery('')
    navigate('/shop')
  };
  return (
    <div className="w-full  flex flex-col lg:flex-row mt-2">
      <div className="w-full lg:w-1/4 h-full lg:px-12 lg:py-5  lg:hidden">
        <MobileCategories/>
      </div>
      <div className="w-full lg:w-1/4 h-full lg:px-12 lg:py-5 hidden lg:block">
        <Categories title="Categories" />
      </div>
      <div className="w-full lg:w-2/4 h-full">
        <div className="flex gap-2 items-center p-4">
          <div className="join w-full lg:mt-2 mb-2">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search Your Products"
              className="input input-bordered join-item w-full"
            />
            <button onClick={() => handelSearch()} className="btn join-item button text-white">
              Search <FaSearch />
            </button>
          </div>
          <p className="text-xl text-[#C50076]">
            <IoCartOutline />
          </p>
          <Link to="/wishlist">
            <p className="text-xl text-[#C50076]">
              <FaRegHeart />
            </p>
          </Link>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={c1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden lg:block lg:w-1/4 h-full sticky top-20 z-40">
        <img className="w-full h-full" src={c3} alt="add1" />
        <img className="w-full h-full" src={c3} alt="add2" />
      </div>
    </div>
  );
};

export default Hero;
