import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Magnifier from "@computeruniverse/react-magnifier";
import Collapse from "react-bootstrap/Collapse";
import { useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Outlet, Link } from "react-router-dom";
import "./ProductDetailPage.css";
import { Number } from './Number';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddToCartShortcut from "./AddToCartShortcut";


function ProductDetailPage(prop) {
  const wishlist = prop.wishlist;
  const onAdd = prop.onAdd;
  const addOnWishlist = prop.addOnWishlist;
  
  const cartSize = prop.cartSize;
  const cartSizeNumber = cartSize;

  const location = useLocation();
  const props = location.state.data;

  // console.log(props)
  let wishlistButton = 'ADD TO WISHLIST'
  const exist = wishlist.find((x) => x.ProductId === props.ProductId);
  exist ? wishlistButton = 'REMOVE FROM WISHLIST' : wishlistButton = 'ADD TO WISHLIST';


  const [Image, setImage] = useState(props.src1);
  const [open, setOpen] = useState(false);
  const [Icon, setIcon] = useState(KeyboardArrowDownIcon);
  const [open1, setOpen1] = useState(false);
  const [Icon1, setIcon1] = useState(KeyboardArrowDownIcon);
  const [open2, setOpen2] = useState(false);
  const [Icon2, setIcon2] = useState(KeyboardArrowDownIcon);
  const [open3, setOpen3] = useState(false);
  const [Icon3, setIcon3] = useState(KeyboardArrowDownIcon);

  const [Qty, setQty] = useState(1);
  props.qty = Qty;

  return (
    <Container className="mt-10 z-1">
      <Row>
        <Col sm={12} md={6} lg={6} xl={6} xxl={6} className="mb-6 z-10 flex flex-row justify-center">
          <div className="">
            <div className="">
              <div>
                <div className="cursor-move magnifier-div">
                  <Magnifier
                    zoomImg={Image}
                    zoomImgHeight={1800}
                    zoomImgWidth={1200}
                    offsetLeft={20}
                  >
                    <div style={{ width: 340 }}>
                      <img src={Image} width="400" alt="Lorem picsum " />
                    </div>
                  </Magnifier>
                </div>
                    <img src={Image} alt="" width={400} className="main-image" />
              </div>
            </div>

            <div className="flex flex-row justify-center ">
              <img
                src={props.src1}
                alt=""
                onClick={() => setImage(props.src1)}
                width={70}
                className="m-2"
              />

              <img
                src={props.src2}
                alt=""
                onClick={() => setImage(props.src2)}
                width={70}
                className="m-2"
              />

              <img
                src={props.src3}
                alt=""
                onClick={() => setImage(props.src3)}
                width={70}
                className="m-2"
              />

              <img
                src={props.src4}
                alt=""
                onClick={() => setImage(props.src4)}
                width={70}
                className="m-2"
              />
            </div>
          </div>
        </Col>

        <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
          <div>
            <div className="ml-8">
              <p>{props.ProductTitle}</p>
              <p className="font-semibold text-xl">PKR {Number(props.ProductPrice)}</p>
              <div className="flex flex-row">
                <p className="mr-3">QUANTITY</p>
                <div className="flex flex-row">
                  <div
                    className="w-6 h-6 border-2 flex flex-row justify-center items-center cursor-pointer"
                    onClick={() => { Qty > 1 ? setQty(Qty - 1) : setQty(Qty) }}
                  >
                    -
                  </div>
                  <div>
                    <div
                      type="number"
                      className="border-2 w-10 h-6 text-xs flex flex-row justify-center items-center"
                      min={1}
                    >
                      {Qty}
                    </div>
                  </div>
                  <div
                    className="w-6 h-6 border-2 flex flex-row justify-center items-center cursor-pointer"
                    onClick={() => { setQty(Qty + 1) }}
                  >
                    +
                  </div>
                </div>
              </div>
              <p>{props.ProductCode}</p>
            </div>
            <hr />

            <div className="ml-8 mr-8">
              <div
                className="font-semibold cursor-pointer flex justify-between items-center"
                onClick={() => {
                  setOpen(!open);
                  open
                    ? setIcon(KeyboardArrowDownIcon)
                    : setIcon(KeyboardArrowUpIcon);
                }}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <div>DESCRIPTION</div>
                <div>
                  <Icon />
                </div>
              </div>

              <Collapse in={open} className="mt-3">
                <div id="example-collapse-text">
                  <hr />
                  {props.DescriptionText.map((data, index) => (
                      <p className="m-1" key={index}>{data.description}</p>
                  ))}
                </div>
              </Collapse>
            </div>
            <hr />
          </div>
          <div className="text-center ">
            <button className=" border-2 border-black p-2 mr-2 mb-3" onClick={() => addOnWishlist(props)}>
            {wishlistButton}
            </button>
              <button className="border-2 border-black bg-dark text-white pr-4 pl-4 pt-2 pb-2 mr-2 mb-3" 
              onClick={() => {
                onAdd(props, Qty);
                {toast(<AddToCartShortcut productCart={""} cartSizeNumber={cartSizeNumber} ProductTitle={props.ProductTitle} ProductPrice={props.ProductPrice} src1={props.src1} state={{ MainImageSrc: props.src1, ProductTitle: props.ProductTitle, ProductPrice: props.ProductPrice, productsQuantity: Qty }} />)};
              }}>
                ADD TO CART
              </button>
            <Link to="/FormiksForm" state={{ MainImageSrc: props.src1, ProductTitle: props.ProductTitle, ProductPrice: props.ProductPrice, productsQuantity: Qty }}>
              <button className="border-2 text-black border-black p-2 mb-3">
                BUY IT NOW
              </button>
            </Link>

            <ToastContainer className={"mt-20"} style={{width: "380px"}} toastStyle={{ backgroundColor: "#F5F5F5" }} icon={false} bg="light" />


          </div>

          <hr />

          <div className="ml-8 mr-8">
            <div
              className="font-semibold cursor-pointer flex justify-between items-center"
              onClick={() => {
                setOpen1(!open1);
                open1
                  ? setIcon1(KeyboardArrowDownIcon)
                  : setIcon1(KeyboardArrowUpIcon);
              }}
              aria-controls="example-collapse-text"
              aria-expanded={open1}
            >
              <div>INSTRUCTION</div>
              <div>
                <Icon1 />
              </div>
            </div>
            <Collapse in={open1} className="mt-3">
              <div id="example-collapse-text">
                <hr />
                {props.InstructionText.map((data, index) => (
                  <p className="m-1" key={index}>{data.instruction}</p>
                ))}
              </div>
            </Collapse>
          </div>

          <hr />

          <div className="ml-8 mr-8">
            <div
              className="font-semibold cursor-pointer flex justify-between items-center"
              onClick={() => {
                setOpen2(!open2);
                open2
                  ? setIcon2(KeyboardArrowDownIcon)
                  : setIcon2(KeyboardArrowUpIcon);
              }}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
            >
              <div>DELIVERY</div>
              <div>
                <Icon2 />
              </div>
            </div>
            <Collapse in={open2} className="mt-3">
              <div id="example-collapse-text">
                <hr />
                {props.DeliveryText.map((data, index) => (
                  <p className="m-1" key={index}>{data.delivery}</p>
                ))}
              </div>
            </Collapse>
          </div>

          <hr />

          <div className="ml-8 mr-8">
            <div
              className="font-semibold cursor-pointer flex justify-between items-center"
              onClick={() => {
                setOpen3(!open3);
                open3
                  ? setIcon3(KeyboardArrowDownIcon)
                  : setIcon3(KeyboardArrowUpIcon);
              }}
              aria-controls="example-collapse-text"
              aria-expanded={open3}
            >
              <div>EXCHANGE</div>
              <div>
                <Icon3 />
              </div>
            </div>
            <Collapse in={open3} className="mt-3">
              <div id="example-collapse-text">
                <hr />
                {props.ExchangeText.map((data, index) => (
                  <p className="m-1" key={index}>{data.exchange}</p>
                ))}
              </div>
            </Collapse>
          </div>

          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetailPage;
