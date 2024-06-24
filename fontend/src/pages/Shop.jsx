import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import SingleCard from "../components/SingleCard";
import { MdFormatListBulleted } from "react-icons/md";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";
import UseProduct from "../Hooks/useProduct";


const Shop = () => {
  const { filteredProducts } = UseProduct()

  console.log(filteredProducts)
  return (
    <div>
      <div className="container mx-auto mt-2 lg:mt-10 mb-2 p-2">
        <div className="w-full  flex flex-col-reverse lg:flex-row mt-2">
          <div className="w-full lg:w-1/4 h-full lg:px-12 lg:py-5 hidden lg:block ">
            <Categories title={"Home/Clothing"} />
          </div>
          <div className="w-full lg:w-3/4 h-full">
            <div className="flex justify-end items-center gap-2">
              <span>View</span>
              <TfiLayoutGrid2Alt />
              <MdFormatListBulleted />
            </div>

            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
              {
                filteredProducts?.map(product => <SingleCard
                  key={product._id}
                  product={product} ></SingleCard>)
              }

            </div>


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
