import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Number } from "../Number"

export default function FormPageProducts(props) {

  let MainImageSrc = props.MainImageSrc;
  let ProductTitle = props.ProductTitle;
  let ProductPrice = props.ProductPrice;
  let productsQuantity = props.productsQuantity;


  return (
    <div className="flex justify-center">
      <div className="mt-10 text-sm w-96">
        <div className="flex flex-row relative">
          <span className='absolute z-10 bg-gray-500 text-white w-5 h-5 rounded-5 text-center '>{productsQuantity}</span>
          <img
          src={MainImageSrc}
          alt="useLocation is making an unknow error"
            className="mr-3 w-20 rounded-lg"
          />
          <div>
            <p className="font-medium">{ProductTitle}</p>
            <div className="flex flex-row justify-between">
              <p className="text-xs">UNSTICHED</p>
              <p className="font-medium">Rs. {Number(ProductPrice)}</p>
            </div>
            <p className="text-xs">Custom_Color: BLACK</p>
          </div>
        </div>
        <hr />

        <div className="flex flex-row">
          <input
            className="form-control shadow-none border-2 w-full p-2 mr-2"
            placeholder="Gift card or discount code"
            type="text"
          />
          <button className="btn btn-secondary border-2 m-0">Apply</button>
        </div>
        <hr />

        <div className="flex flex-row justify-between">
          <p className="text-sm">Subtotal</p>
          <p className="font-medium">Rs. {Number(ProductPrice * productsQuantity)}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm">Shipping</p>
          <p className="">Calculated at next step</p>
        </div>
        <hr />
        <div className="flex flex-row justify-between">
          <p className="text-base">Total</p>
          <p className="text-2xl font-semibold">PKR. {Number(ProductPrice * productsQuantity)}</p>
        </div>
      </div>
    </div>
  );
}
