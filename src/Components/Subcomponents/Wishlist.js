import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from './Breadcrumbs';
import { Number } from './Number';
import './Wishlist.css';

export default function Wishlist(props) {
  const addOnWishlist = props.addOnWishlist;
  const wishlist = props.wishlist;
  const onAdd = props.onAdd;

  return (
    <div className='flex flex-col justify-center items-center'>
      <Container className='mt-10'>
        <Row>
          <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Breadcrumbs props={props.props} />
          </Col>
        </Row>
      </Container>

      {
        wishlist.length < 1 &&
        <div className=' text-center text-4xl pt-52 pb-48'>
          <span className=''>Your Wishlist is empty </span>
          <div className='pt-40'>
            <div>Have an Account?</div>
            <div className='text-xl pt-4'><Link to="/Login" className='text-black'>Login</Link> to check out faster</div>
          </div>
        </div>
      }


      {
        wishlist.length > 0 &&
        <Container >
          <div className='flex flex-row justify-between mt-12'>
            <span className='font-medium text-3xl'>Your Wishlist</span>
            <span className='font-base text-lg'><Link to="/" className='text-black'>Continue Shopping</Link></span>
          </div>

          <hr />

          {wishlist.map((Apis, index) => (
            <div key={index}>
              <Row className='mt-4'>
                <Col sm={12} md={3} lg={3} className="mt-3" >
                  <img className='xs:w-full sm:w-full md:full lg:w-36' src={Apis.src1} alt="" />
                </Col>
                <Col sm={12} md={3} lg={3} className="mt-3">
                  <div className='flex flex-col pl-2'>
                    <Link to="/ProductDetailPage" className='font-semibold hover:underline cursor-pointer text-black no-underline' state={{ data: Apis }}>{Apis.ProductTitle}</Link>
                    <span className='text-lg'>PKR: {Number(Apis.ProductPrice)}</span>
                  </div>
                </Col>
                <Col sm={12} md={3} lg={3} className="mt-3">
                  <span className='pl-2'>{Apis.ProductCode}</span>
                </Col>
                <Col sm={12} md={3} lg={3} className="mt-3 ">
                  <div className='flex  wishlist-buttons'>
                    <Link to="/Cart">
                      <button className='cursor-pointer bg-dark text-white text-center text-lg m-2 p-1 w-28' onClick={() => onAdd(Apis, 1)}>Shop Now</button>
                    </Link>
                    <button className='cursor-pointer p-1 text-center m-2 border-2 border-black text-base w-28' onClick={() => addOnWishlist(Apis)}>Remove</button>
                    <a href="tel: +923074079459" >
                      <img className="w-7 m-2" src="https://wishlist-wizard-be.alche.cloud/static/whatsapp.png" alt=" " />
                    </a>
                  </div>
                </Col>
              </Row>
              <hr />
            </div>

          )
          )}
        </Container>

      }




    </div>
  )
}
