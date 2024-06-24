import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import Flash from "./Flash";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";




const FlashSales = () => {
    const [flashSales, setFlashSales] = useState([])
    useEffect(() => {
        fetch('https://ledisbucket.onrender.com/api/v1/flash/sell/product')
            .then(res => res.json())
            .then(data => setFlashSales(data.products))
    }, [])
    console.log(flashSales)
    return (
        <div className="container mx-auto m-5">
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                freeMode={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    620: { slidesPerView: 4, spaceBetween: 10 }
                }}
            >

                {flashSales.map(flash => <> <SwiperSlide>
                    <Link to={'/shop'}>
                        <div className="max-w-xs m-4 w-full mx-auto rounded overflow-hidden shadow-lg">
                            <img className="w-full h-40 object-cover" src={flash.images[1].url} alt="p1" />

                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2  flex justify-between">
                                    <h3 className="text-[#C50076]">{flash.name}</h3>
                                    <p className="text-xs flex gap-2 items-center">
                                        <span className="text-[#FFC226]">
                                            <FaStar />
                                        </span>
                                        4.5 (25)
                                    </p>
                                </div>
                                <p className="text-gray-700 text-base mb-2"><span className="font-bold">টা {flash.price}</span> </p>

                                <p className="text-slate-500 text-base mb-2">
                                    <span className="line-through"> টা {flash.offerPrice}</span> <span>-{flash.offerPercent}%</span>
                                </p>
                            </div>
                        </div></Link>
                </SwiperSlide></>

                )}
            </Swiper>
        </div>
    );
};

export default FlashSales;