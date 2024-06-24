import { Link } from "react-router-dom";
import p1 from "../assets/product details & Design/LBBDMKF5021.03.jpeg";
import { FaStar } from "react-icons/fa";

const SingleCard = ({product}) => {
  const {_id,name,description,price,images,offerPrice,offerPercent}=product
  return (
    <Link to={`/product-details/${_id}`}>
      <div className="max-w-xs w-full mx-auto rounded overflow-hidden shadow-lg">
        <img className="w-full h-40 object-cover" src={images[0].url} alt="p1" />

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
      </div>
    </Link>
  );
};

export default SingleCard;
