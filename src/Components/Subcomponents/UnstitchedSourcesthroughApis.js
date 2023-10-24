import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { Number } from './Number';

export default function SecondHoverPage(props) {
  const [Image, setImage] = useState(props.UnstitchedApisData.src1);
  const [NavNumber, setNavNumber] = useState(props.navnumber);
  const prop = props.UnstitchedApisData;

  // Wishlist
  const addOnWishlist = props.addOnWishlist;
  const wishlist = props.wishlist;

  let onLikeHeartColor = "text-black"
  let exist = wishlist.find((x) => x.ProductId === prop.ProductId);
  exist ? onLikeHeartColor = "text-red-500" : onLikeHeartColor = "text-black";


  return (
    <div className="flex flex-col justify-center items-center no-underline">

      <Link to="/ProductDetailPage" state={{ data: prop }}>

        <Link >
          <div className={`absolute text-black ml-2 mt-2 `} onClick={() => addOnWishlist(prop)}><BsHeart className={`cursor-default text-xl ${onLikeHeartColor}`} /></div>
        </Link>
        <img
          className="cursor-pointer"
          src={Image}
          alt=""
          onMouseEnter={() => {
            setImage(prop.src2);
          }}
          onMouseLeave={() => {
            setImage(prop.src1);
          }}
        />
      </Link>
      <p className="mt-3">{prop.ProductTitle}</p>
      {/* <Link to="/ProductDetailPage" className="no-underline"> */}
      <p className="text-black font-semibold text-normal cursor-pointer hover:underline">
        PKR. {Number(prop.ProductPrice)}
      </p>
      {/* </Link> */}
    </div>
  );
}
