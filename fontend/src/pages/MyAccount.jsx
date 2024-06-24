import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";

const MyAccount = () => {
  const {user, isAuthenticated} = useSelector(state=>state.user)
  const [name, setName]  = useState(isAuthenticated && user.name)
  const [contact, setContact] = useState(isAuthenticated && user.contact)
  const [address, setAddress] = useState(isAuthenticated && user.address)
  const [email, setEmail] = useState(isAuthenticated && user.email)
  return (
    <div className="m-h-screen">
      <div className="container mx-auto mt-2 mb-2">
        <div>
          <h2 className="text-[#660062] text-xl font-semibold mb-2">
            My Wishlist
          </h2>
          <button className="btn text-left w-full bg-[#CD298C] text-white">
            Add Account Info
          </button>
        </div>
        <div className="w-full flex  justify-center p-10 ">
          <div className="flex justify-center flex-wrap">
            <div className="text-center lg:border border-1 border-[#CD298C] p-10 lg:p-20 rounded-s-lg">
              <div className="relative avatar mt-2">
                <div className="badge absolute bottom-0 right-0 z-20 bg-[#660062] w-8 text-white ">
                  <FiCamera />
                </div>
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl ">Hasan Mollah</h3>
                <button className="btn btn-sm lg:btn-md bg-[#CD298C] text-white">
                  Verify Account
                </button>
              </div>
            </div>
            <div className="lg:border border-1 border-[#CD298C] p-10 lg:p-20 rounded-r-lg">
              <h3 className="text-xl font-semibold">Profile</h3>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Mobile</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={contact}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Address</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                />
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-sm lg:btn-md bg-[#CD298C] text-white">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
