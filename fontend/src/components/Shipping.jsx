import { useState } from "react";
import useProduct from "../Hooks/useProduct";
import { Link } from "react-router-dom";

const Shipping = () => {
  const { shippingInfo, setShippingInfo } = useProduct();
  const [errro, setError] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
    setError(""); // Clear error when input is correct

  };

 
  const handleContinue = () => {
    // Access form data here using shippingInfo object
    console.log(shippingInfo);
    // You can proceed with further actions like validation, API calls, etc.
  };

  return (
    <div className="min-h-screen">
      <div className="text-center mt-5">
        <ul className="steps steps-horizontal lg:steps-horizontal">
          <li className="step step-primary">Shipping</li>
          <li className="step step-primary">Payment</li>
          <li className="step">Review</li>
        </ul>
      </div>
      <div className="flex justify-center mt-5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-[#C50076]">
          <h3 className="p-2 bg-[#C50076] text-white text-center m-2">
            Enter Your Shipping Address
          </h3>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                 City
                </span>
              </label>
              <input
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                placeholder="City"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Phone Number
                </span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={shippingInfo.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                name="fullName"
                value={shippingInfo.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-500">
                  Address
                </span>
              </label>
              <input
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Others</span>
              </label>
              <input
                type="text"
                name="others"
                value={shippingInfo.others}
                onChange={handleInputChange}
                placeholder="Others details"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Link to='/payment-info'><button
                onClick={handleContinue}
                className="btn bg-[#660062] text-white font-bold hover:text-black"
              >
                Continue to Payment
              </button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
