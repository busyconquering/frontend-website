import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Number } from './Number';
import Breadcrumbs from "./Breadcrumbs";


export default function Cart(props) {
    
    const cartItems = props.cartItems;
    const itemPrice = cartItems.reduce((x,y) => x + y.qty * y.ProductPrice, 0);

    return (
        <Container className='flex flex-col justify-center items-center pt-2 '>
        <Container className="mt-10">
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Breadcrumbs props={props.props} />
          </Col>
        </Row>
        </Container>
    {
        cartItems.length < 1 &&
        <div className='text-center text-4xl pt-40 pb-36'>
          <span className=''>Your Cart is Empty </span>
          <div className='pt-36'>
            <div>Have an Account?</div>
            <div className='text-xl pt-4'><Link to="/Login" className='text-black'>Login</Link> to check out faster</div>
          </div>
        </div>
      }

    {
      cartItems.length > 0 &&
      <Container className="w-full h-full"> 
          <div className="w-full flex justify-between mt-3">
              <div><h3 className="text-2xl font-medium mb-10">YOUR CART</h3></div>
              <div className="pt-3"><Link to="/" className='text-black cursor-pointer'>Continue Shopping</Link></div>
          </div>
          <Row>
              <Col className=" p-2">PRODUCT</Col>
              <Col className=" p-2 d-xs-none d-none d-sm-block d-md-block text-center mr-20">Quantity</Col>
              <Col className=" p-2 text-right mr-3">TOTAL</Col>
          </Row>
          <hr className="m-0 mb-2" />
          {cartItems.map((Apis, index) => (
              <div className="flex mb-5" key={index}>
                  <div className="  pt-0 pl-0 pr-10"><img width={150} src={Apis.src1} alt=""></img></div>
                  <Row className="w-full ml-3">
                      <Col  xs={8} sm={8} md={8} lg={8} xl={8} xxl={8} className="p-2">
                          <Row className="w-full">
                              <Col xs={12} sm={12} md={6} lg={6} xl={6} className=" h-28 p-2">
                                  <Link to='/ProductDetailPage' className='no-underline text-black' state={{ data:  Apis  }}><p className="m-0 hover:underline decoration-2 cursor-pointer">{Apis.ProductTitle}</p></Link>
                                  <p className="pt-0 m-0 pb-0">PKR{' '}{Number(Apis.ProductPrice)}</p>
                              </Col>
                              <Col xs={12} sm={12} md={6} lg={6} xl={6} className=" p-2">
                                  <div className='ml-0 flex flex-row text-center  xs-justify-start sm:justify-end cursor-pointer mr-7'>

                                <div className="flex flex-row w-full">
                                <div className='w-7 h-7 border-2 border-black' onClick={() => props.onRemove(Apis)}>-</div>
                                      <div className='w-7 h-7 border-2 border-black ' >{Apis.qty}</div>
                                      <div className='w-7 h-7 border-2 border-black' onClick={() => props.onAdd(Apis,1)}>+</div>
                                      <div className=' ml-3' onClick={() => props.onDelete(Apis)}><DeleteOutlineIcon /></div>
                                </div>
                                  </div>
                              </Col>
                          </Row>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className=" p-2 text-right">PKR. {Number(Apis.ProductPrice * Apis.qty)}</Col>
                  </Row></div>
          )
          )}
          <hr className="mt-5" />
          <div className="grid justify-end text-end mb-5">
              <p className="text-lg">SUBTOTAL  PKR {Number(itemPrice)}</p>
              <p className="text-sm mb-4">Taxes and<Link to={""} className='text-black'> shipping</Link> calculated at checkout</p>
              <div className="text-center text-white bg-black h-10 w-96 font-bold pt-2">CHECKOUT</div>
          </div>
      </Container>
      
    }
    </Container>
)}