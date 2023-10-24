import React from 'react'
import {Container, Row, Col} from "react-bootstrap";
import DoneIcon from '@mui/icons-material/Done';
import { Outlet, Link } from "react-router-dom";
import { Number } from "./Number"
import { useLocation } from "react-router-dom";


export default function AddToCartShortcut(props) {

    const location = useLocation();
    const MainImageSrc = location.state.MainImageSrc;
    const ProductTitle = location.state.ProductTitle;
    const ProductPrice = location.state.ProductPrice;
    const productsQuantity = location.state.productsQuantity;


  return (
    <Container fluid className={`text-black transition-shadow ${props.productCart}`} >
        <Row className='flex flex-col'>
            <Col sm={12} md={12} lg={12} className="text-sm text-left">
                <DoneIcon />
                <span className='pl-4'>Item added to your cart</span>
            </Col>
            <Col sm={12} md={12} lg={12} className="text-sm text-left">
                <div className='flex flex-row mt-4'>
                <img src={props.src1} className='w-28' />
                <div className='flex flex-col leading-10'>
                    <span className='pl-4 text-base'>{props.ProductTitle}</span>
                    <span className='pl-4'>PKR: {Number(props.ProductPrice)}</span>
                    <span className='pl-4'>Custom_Color: BLACK</span>
                </div>
                </div>
            </Col>
            <Col sm={12} md={12} lg={12} className="text-center">
                <Link to="/Cart">
                    <button className='w-full border-2 border-gray-300 p-2 font-medium mt-8 text-black'>VIEW MY CART ({props.cartSizeNumber + 1})</button>
                </Link>
            </Col>
            <Col sm={12} md={12} lg={12} className="text-center">
                <Link to="/Cart">
                    <button className='w-full bg-dark text-white p-2 font-medium mt-2 text-center'>CHECK OUT</button>
                </Link>
            </Col>
            <Col sm={12} md={12} lg={12} className="text-center">
                <Link to="/">
                    <button className='w-full underline text-sm font-semibold p-2 mt-2 text-black'>CONTINUE SHOPPING</button>
                </Link>
            </Col>
        </Row>
    </Container>
  )
}
