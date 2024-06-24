import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/company-logo.png";
import { FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/userAction";

const Login = () => {

  const dispatch = useDispatch()
  const history = useNavigate()
  const {loading, error, user, isAuthenticated} = useSelector(state=>state.user)
  console.log(user)
  // const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  const handleSubmit  =(e)=>{
    e.preventDefault()
    const data = {
      email:email,
      password:pass,
      
    }
    dispatch(loginUser(data))
  }
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(()=>{
    if(isAuthenticated){
      history(redirect)
    }
    if(error){
      console.log(error)
    }
  },[error, isAuthenticated])
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" lg:text-left">
            <img src={logo} alt="" />
            <h1 className="text-5xl font-bold text-[#660062]">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <label className="label">
              <Link
                to="/"
                className="label-text-alt link link-hover text-[#660062] font-bold"
              >
                For Visit Our Website
                <span className="inline-block">
                  <FaShoppingBag />
                </span>
              </Link>
            </label>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={(e)=>setPass(e.target.value)}
                />
                <div className="flex justify-between">
                  <label className="label">
                    <Link
                      to="/forgot"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover"
                    >
                      New Here! Register
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleSubmit}>{loading? "Loading....." : "Login"}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
