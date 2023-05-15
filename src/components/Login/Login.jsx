import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [show,setShow] = useState(true)
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  const from = location?.state?.from?.pathname || '/'

  const handleLogin = (e) => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value 
    const password = form.password.value 
    console.log(email,password)

    signIn(email,password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      form.reset()
      navigate(from, {replace : true})
    }).catch(error=>{
      console.log(error.message)
    })

  };
  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-4xl text-gray-600 font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={show ? 'password':'text'}
                placeholder="password"
                className="input input-bordered"
              />
              <p className="cursor-pointer"><small onClick={()=>setShow(!show)}>{show ? 'Show password':'Hide password'}</small></p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning w-full bg-opacity-40  capitalize text-lg">
                Login
              </button>
            </div>
            <label className="label">
              <small>
                New to Ema-john?
                <Link to="/signup" className=" link link-hover text-warning">
                  {" "}
                  Create New Account
                </Link>
              </small>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
