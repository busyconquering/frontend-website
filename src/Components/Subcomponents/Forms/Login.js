import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h2 className="text-center text-5xl font-normal mt-20">Login</h2>
      <div className="flex flex-col items-center justify-center mt-20 mb-20">
        <div className=" w-96">
          <input
            type="text"
            className="form-control shadow-sm border-2 text-black p-2 mb-4"
            placeholder="Email"
          />
          <input
            type="text"
            className="form-control border-2 shadow-sm border-black p-2"
            placeholder="Password"
          />
          <p className="mt-3 cursor-pointer">
            <Link to="/ResetPassword" className="text-black">
              Forgot your password?
            </Link>
          </p>
          <div className="flex flex-col items-center">
            <button className="btn btn-secondary p-2 mt-4">Sign In</button>
            <p className="underline mt-4 cursor-pointer">
              <Link to="/FormiksForm" className="text-black">
                Create Account
              </Link>
            </p>
          </div>
          <hr className="mt-10" />
          <div className="flex flex-col justify-center items-center">
            <p className=" text-2xl">Continue as a guest</p>
            <button className="btn btn-secondary mt-4">
              <Link to="/" className="text-white no-underline">
                Continue
              </Link>
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
