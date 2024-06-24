import Footer from "../components/Footer";
import Headline from "../components/Headline";
import NavSearch from "../components/NavSearch";
import Navbar from "../components/Navbar";
import SingleCard from "../components/SingleCard";
import WishlistItem from "./Cart/WishlistItem";

const MyWishlist = () => {
  return (
    <>
      <NavSearch />
      <div className="container mx-auto mt-10 mb-2">
        <h2 className="text-[#660062] text-xl font-semibold mb-2">
          My Wishlist
        </h2>
        <button className="btn text-left w-full bg-[#CD298C] text-white">
          All Add to Cart
        </button>
        <div className="w-full flex flex-col lg:flex-row mt-2">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="w-full">
              <WishlistItem />
            </div>
            <div className="w-full ">
              <WishlistItem />
            </div>
            <div className="w-full ">
              <WishlistItem />
            </div>
            <div className="w-full ">
              <WishlistItem />
            </div>
          </div>
        </div>
        <Headline title={"Just for you"} />
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
      <Footer />
    </>
  );
};

export default MyWishlist;
