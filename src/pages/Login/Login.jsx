import React from 'react';
import img from '../../assets/socialLogin/Mobile-login.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <div className="flex items-center h-full">
            <img src={img} alt="Login" className="rounded-lg md:h-[450px] " />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-rose-600 btn-ghost" type="submit" value="Login" />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Car Doctors{" "}
              <Link className="text-rose-600 font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;