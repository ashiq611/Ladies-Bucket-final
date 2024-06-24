import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import p1 from "../assets/product details & Design/LBBDMKF5021.03.jpeg";
import { Link } from "react-router-dom";

const OrderItem = ({order}) => {
  const {orderItems }=order
  return (
    <div className="max-w-xl relative w-full mx-auto flex items-center lg:flex-row rounded overflow-hidden shadow-lg p-4">
      <div className="badge absolute top-2 left-0 z-20 bg-[#660062] text-white origin-bottom -rotate-12">
        {order.orderStatus}
      </div>
      <img
        className="w-full lg:w-1/4 h-32 md:h-40  object-cover"
        src={order.orderItems[0].image}
        alt="p1"
      />

      <div className="px-6 py-4 flex  justify-between items-center lg:w-3/4">
        <div>
          <div className=" mb-2">
            <h3 className="text-sm font-semibold">{order.orderItems[0].name}</h3>
            <p className="text-gray-700  text-xs mb-2">
              Size: One Size Color Family: {order.orderItems[0].size}
            </p>
            <p className="text-gray-700  text-xs mb-2">
              Colour: {order.orderItems[0].color}
            </p>
          </div>
          <p className="text-[#C50076] text-base mb-2"> {order.orderItems[0].price} X {order.orderItems[0].quantity}</p>
          <p className="text-xs">
            <span className="text-green-500">Price: {order.totalPrice}</span>
          </p>
        </div>
        <div className="flex justify-between gap-2 lg:justify-start">
          <Link to='/shop'><div className="mb-2 lg:mb-0 btn btn-sm md:btn-md bg-[#FF44CB] text-white">
            Buy Again
          </div></Link>
          <Link to='/'><div className="btn btn-sm md:btn-md">Return</div></Link>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
