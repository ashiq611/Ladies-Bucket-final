import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishlistItem = ({ item, removeFromCart }) => {
  const {_id, name, images, price, color, offerPrice, offerPercent } = item;
  


  const handleDelete = () => {
    removeFromCart(_id);
  };

  return (
    <div className="max-w-xl w-full mx-auto flex items-center lg:flex-row rounded overflow-hidden shadow-lg p-4">
      <img
        className="w-full lg:w-1/4 h-32 md:h-40  object-cover"
        src={images[0].url}
        alt="p1"
      />
      <div className="px-6 py-4 flex justify-between items-center lg:w-3/4">
        <div>
          <div className=" mb-2">
            <h3 className="text-sm font-semibold">{name}</h3>
            <p className="text-gray-700  text-xs mb-2">
              Size: One Size Color Family: Black
            </p>
          </div>
          <p className="text-[#C50076] text-base mb-2">Price: {price}</p>
          <p className="text-xs">
            <span className="line-through">{offerPercent} % </span>
            <span className="text-green-500">Price Dropped</span>
          </p>
        </div>
        <div className="flex justify-between gap-2 lg:justify-start">
          <div className="mb-2 lg:mb-0 btn btn-sm md:btn-md bg-[#FF44CB] text-white">
            <MdOutlineAddShoppingCart />
          </div>
          <div className="btn btn-sm md:btn-md" onClick={handleDelete}>
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
