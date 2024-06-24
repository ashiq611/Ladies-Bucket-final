import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import ProductsDetails from "../components/ProductsDetails";
import Card from "../components/Card";

import Headline from "./../components/Headline";
import FlashSales from "../components/FlashSale/FlashSales";


const ShopProductDetail = () => {

 
  return (
    <div className="mx-4">
  
      <ProductsDetails />
      <Headline title={"You may Also Like"} />
      <FlashSales></FlashSales>
      <Footer />
    </div>
  );
};

export default ShopProductDetail;
