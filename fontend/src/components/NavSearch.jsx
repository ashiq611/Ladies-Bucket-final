import { FaSearch } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Us from "../assets/US.png";
import companyLogo from "../assets/company-logo.png";
import UseProduct from "../Hooks/useProduct";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {logOut} from "../redux/actions/userAction"

const NavSearch = () => {
  const {isAuthenticated} =useSelector(state=>state.user)
  const history = useNavigate()

  const { products, setFilteredProducts } = UseProduct()
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate()
  const handelSearch = () => {
    // Handle the click event based on the category
    console.log(products)
    const filtered = products.filter((product) =>
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase())

    )
    setFilteredProducts(filtered)
    setSearchQuery('')
    navigate('/shop')
  };

  const dispatch = useDispatch()
  const handleLogout = () =>{
    dispatch(logOut())
  }
  return (
    <div>
      <div className="navbar   flex-col lg:flex-row">
        
        <div className="flex-none gap-2">
          <div className="join w-full lg:mt-2 mb-2">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search Your Products"
              className="input input-sm lg:input-md input-bordered join-item w-full"
            />
            <button onClick={() => handelSearch()} className="btn btn-sm lg:btn-md join-item button text-white">
              Search <FaSearch />
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/account" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/orderlist">My Orders</Link>
              </li>
              <li>
                <Link>Reviews & Ratings</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <img className="w-8" src={Us} alt="" />
            </div>
            <div className="block text-xl">
              <Link to="/wishlist">
                <MdOutlineAddShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
