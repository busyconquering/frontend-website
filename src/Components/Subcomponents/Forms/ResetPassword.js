import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className="text-center text-5xl font-normal mt-20">Reset your password</h2>
      <p className='mt-3'>We will send you an email to reset your password</p>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="w-96">
          <input
            type="text"
            className="form-control shadow-sm border-2 text-black p-2 mb-4"
            placeholder="Email"
          />

<div className="flex flex-col items-center">
            <button className="btn btn-secondary p-2 mt-4">Submit</button>
            <p className="underline mt-4 cursor-pointer">
              <Link to="/Login" className="text-black">
                Cancel
              </Link>
            </p>
          </div>
          <hr className="mt-10" />
          <div className="flex flex-col justify-center items-center mb-20">
            <p className=" text-2xl">Continue as a guest</p>
            <button className="btn btn-secondary mt-4">
              <Link to="/" className="text-white no-underline">
                Continue
              </Link>
            </button>
            
    </div>  
    </div>
    </div>
    </div>
  )
}
