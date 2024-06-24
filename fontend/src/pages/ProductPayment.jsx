import React, { useEffect, useState } from 'react';
import useProduct from '../Hooks/useProduct';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../redux/actions/orderAction';
import { useNavigate } from 'react-router-dom'; // Removed 'redirect' import as it's not used

const ProductPayment = () => {
    const { productInfo, shippingInfo } = useProduct(); // Combined both useProduct calls
    const navigate = useNavigate();
    const [orderItems,setOrderItems]=useState([])
    const shippingPrice = productInfo.price * 0.03;
    const dispatch = useDispatch();
    const { error, success, loading,  } = useSelector(state => state.order);
    console.log(productInfo)
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            shippingInfo: shippingInfo,
            orderItems:orderItems,
            paymentInfo: 'paid',
            itemPrice: productInfo.price * productInfo.quantity,
            shippingPrice: shippingPrice,
            totalPrice: productInfo.price * productInfo.quantity + shippingPrice,
        };
        console.log(data);
        dispatch(createOrder(data));
        
    };

    
    useEffect(() => {
        if (success) {

            // Assuming you want to redirect to '/orderlist' when orders are received
            navigate('/orderlist');
        }
        if(error){
            console.log(error)
        }
        setOrderItems([productInfo])
    }, [success,error]); // Added navigate to dependency array
    
    return (
        <div className="product-card max-w-sm mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg w-full product-image" src={productInfo.image} alt="Product Name" />
            </a>
            <div className="p-5 product-details">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{productInfo.name}</h5>
                <div className="flex justify-between mb-2">
                    <p className="text-gray-700 dark:text-gray-400"> price <span className="font-medium">ট {productInfo.price}</span></p>
                    <p className="text-gray-700 dark:text-gray-400"><span className="font-medium">Shipping Price ট {shippingPrice.toFixed(2)}</span></p>
                </div>
                <ul className="list-none mb-3 text-gray-700 dark:text-gray-400">
                    <li>Quantity: <span className="font-medium">{productInfo.quantity}</span></li>
                    <li>Size: <span className="font-medium">{productInfo.size}</span></li>
                    <li>Colour: <span className="font-medium">{productInfo.color}</span></li>
                </ul>
                <p className="text-gray-700 dark:text-gray-400">Address: <span className="font-medium">{shippingInfo.address}</span></p>
                <p className="text-gray-700 dark:text-gray-400">Phone: <span className="font-medium">{shippingInfo.phoneNumber}</span></p>
                <p className="text-gray-700 dark:text-gray-400">Total Price<span className="font-medium"> ট { productInfo.price * productInfo.quantity + shippingPrice }</span></p>
                <button onClick={handleSubmit} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Submit
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductPayment;
