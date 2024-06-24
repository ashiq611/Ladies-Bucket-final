import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

const Arrival = ({ arrival }) => {
    const { name, price, images, offerPercent, offerPrice } = arrival
  
    return (
        <SwiperSlide>
            <Link>
                <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
                    <img className="w-full h-40 object-cover" src={images[1].url} alt="p1" />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2  flex justify-between">
                            <h3 className="text-[#C50076]">{name}</h3>
                            <p className="text-xs flex gap-2 items-center">
                                <span className="text-[#FFC226]">
                                    <FaStar />
                                </span>
                                4.5 (25)
                            </p>
                        </div>
                        <p className="text-gray-700 text-base mb-2"><span className="font-bold">টা {price}</span> </p>

                        <p className="text-slate-500 text-base mb-2">
                            <span className="line-through"> টা {offerPrice}</span> <span>-{offerPercent}%</span>
                        </p>
                    </div>
                </div></Link>
        </SwiperSlide>
    );
};

export default Arrival;