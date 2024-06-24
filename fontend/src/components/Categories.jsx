import catagory1 from "../assets/Dress Front View.png";
import catagory2 from "../assets/T-Shirt.png";
import catagory3 from "../assets/ComputerSupport.png";
import { Link, useNavigate } from "react-router-dom";
import UseProduct from "../Hooks/useProduct";

const Categories = ({ title }) => {
  const { products, setFilteredProducts } = UseProduct()
  const navigate=useNavigate()
  const handleCategory = (category) => {
    // Handle the click event based on the category
    console.log(products)
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase()) ||
      product.name.toLowerCase().includes(category.toLowerCase())

    )
    setFilteredProducts(filtered)
    navigate('/shop')
  };



  return (
    <>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="lg:flex flex-col flex-wrap gap-2 p-2 bg-[#FFFBFB] border bottom-2 border-[#FF44CB] ">
        <button onClick={() => handleCategory("Sharee")}>
          <div className="w-full  flex flex-col lg:flex-row gap-2">
            <img src={catagory1} alt="" className="w-10" />
            <p className="font-semibold">Sharee</p>
          </div>
        </button>
        <button onClick={() => handleCategory("Panjabi")}> <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory1} alt="" className="w-10" />
          <p className="font-semibold">Panjabi</p>
        </div></button>
        <button onClick={() => handleCategory("Baby Items")}><div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory1} alt="" className="w-10" />
          <p className="font-semibold">Baby Items</p>
        </div></button>
        <button onClick={() => handleCategory("Bag")}> <div className="w-full  flex flex-col lg:flex-row gap-2">
          <img src={catagory3} alt="" className="w-10" />
          <p className="font-semibold">Bags</p>
        </div></button>



      </div>

    </>
  );
};

export default Categories;
