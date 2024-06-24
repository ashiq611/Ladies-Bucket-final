import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SingleCard from "../components/SingleCard";
import { MdFormatListBulleted } from "react-icons/md";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import WishlistItem from "./Cart/WishlistItem";

const Clothing = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 mb-2">
        <div className="w-full  flex flex-col-reverse lg:flex-row mt-2">
          <div className="w-full lg:w-1/4 h-full lg:px-12 lg:py-5 lg:block">
            <Categories title={"Home/Clothing"} />
          </div>
          <div className="w-full lg:w-3/4 h-full">
            <div className="flex justify-end items-center gap-2">
              <span>View</span>
              <TfiLayoutGrid2Alt />
              <MdFormatListBulleted />
            </div>

            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
              <div>
                <SingleCard />
              </div>
              <div>
                <SingleCard />
              </div>
              <div>
                <SingleCard />
              </div>
              <div>
                <SingleCard />
              </div>
              <div>
                <SingleCard />
              </div>
              <div>
                <SingleCard />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clothing;
