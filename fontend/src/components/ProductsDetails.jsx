import { useNavigate, useParams } from "react-router-dom";
import c1 from "../assets/image 4.png";
import c3 from "../assets/image 6.png";
import Description from "./Description";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useEffect, useState } from "react";
import useProduct from "../Hooks/useProduct";
import { compareSync } from "bcryptjs";

const ProductsDetails = () => {
  const { setProductInfo } = useProduct()
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState('S');
  const [selectedSize, setSelectedSize] = useState('Blue');
  const { id } = useParams();
  const { products, setProducts } = useProduct()
  const product = products.find((product) => product?._id === id);
  const imageUrl = product?.images?.length > 0 ? product?.images[0]?.url : '';
  console.log('single product', product)

  const [quantity, setQuantity] = useState(1); // Initial quantity is set to 1
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) { // Ensure quantity does not go below 1
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handelAddToCard = () => {
    //add product in localstorage 
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = existingCartItems.findIndex(item => item._id === product._id);

    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      existingCartItems[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      existingCartItems.push({ ...product, quantity });
    }

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(existingCartItems));

    // Optional: You can also provide feedback to the user here, such as displaying a message indicating that the product has been added to the cart

  }
  const handelBuy = () => {
    const productInfo =
    {
      name: product.name,
      price: product.price * quantity,
      size:  selectedColor,
      color: selectedSize,
      quantity: quantity,
      image: product?.images[0].url,

    }
      ;
    console.log(productInfo)
    setProductInfo(productInfo)
    navigate('/shipping-details')
  }



  return (
    <div className="container mx-auto  lg:flex justify-between mt-5">
      <div>
        <div className="w-full lg:w-2/3 lg:flex gap-5 mb-2">
          <div className="">
            <img className="w-30 h-60" src={imageUrl} alt="productsimages" />
          </div>
          <div className="mt-2 mb-2">
            <h3 className="text-lg lg:text-xl font-bold text-[#C50076]">
              {product?.name}
            </h3>
            <h3 className="text-md lg:text-xl font-bold ">
              টা {product?.price * quantity}
            </h3>
            <p className="text-sm"></p>
            <p>Shipping calculated at checkout</p>
            <div className="flex gap-5">
              {/* create dropdown size  */}
              <select
                name="size"
                id="size"
                value={selectedSize}
                onChange={handleSizeChange}
                className="select select-bordered w-16  max-w-xs"
              >

                {product?.size.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}



              </select>
              {/* create dropdown color  */}
              <select
                name="color"
                id="color"
                value={selectedColor}
                onChange={handleColorChange}
                className="select select-bordered w-16  max-w-xs"
              >
                {
                  product?.color.map((color, index) => (
                    <option key={index}>{color}</option>
                  ))
                }


              </select>
              {/* create quantity increase decrease */}
              <div className="flex gap-2">
                <button className="btn btn-xs lg:btn-sm btn-primary" onClick={decreaseQuantity}>
                  -
                </button>
                <button className="btn btn-xs lg:btn-sm btn-primary">{quantity}</button>
                <button className="btn btn-xs lg:btn-sm btn-primary" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-4">
              <button onClick={() => handelAddToCard()} className="btn btn-xs lg:btn-sm bg-white border border-1 border-[#C50076] text-[#C50076]">
                Add to Cart
              </button>
              <button onClick={() => handelBuy()} className="btn btn-xs lg:btn-sm button text-white">
                Buy Now <MdOutlineShoppingCart />
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-mono">Description</h2>
          <p className="font-sans">
            {product?.description}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 h-full sticky top-20 z-40">
        <img className="w-full h-full" src={c3} alt="add1" />
        <img className="w-full h-full" src={c3} alt="add2" />
      </div>
    </div>
  );
};

export default ProductsDetails;
