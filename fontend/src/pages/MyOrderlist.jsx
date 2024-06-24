import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
// import Headline from "../components/Headline";
import NavSearch from "../components/NavSearch";
import OrderItem from "../components/OrderItem"
import { useEffect } from "react";
import { myOrders } from "../redux/actions/orderAction";

// import SingleCard from "../components/SingleCard";
// import WishlistItem from "./Cart/WishlistItem";

const MyOrderlist = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.order)
  console.log(orders)
  useEffect(() => {
    dispatch(myOrders())
  }, [])
  return (
    <>
      <NavSearch />
      <div className="container mx-auto mt-10 mb-2">
        <h2 className="text-[#660062] text-xl font-semibold mb-2">
          My Order List
        </h2>
        <button className="btn text-left w-full bg-[#CD298C] text-white">
          All Orders
        </button>
        <div className="w-full flex flex-col lg:flex-row mt-2">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="w-full">

              {
                orders && orders.map((order, index) => <OrderItem key={index} order={order} ></OrderItem>)
              }
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrderlist;
