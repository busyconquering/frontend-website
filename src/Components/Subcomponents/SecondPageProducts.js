import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UnstitchedProductsMap from './UnstitchedProductsMap';
import Filter1 from './Filter1';
import FilterNav from './FilterNav';
import './Filter1.css';
import Breadcrumbs from './Breadcrumbs';

export default function SecondPageProducts(props) {
  const  addOnWishlist = props.addOnWishlist; 
  const wishlist = props.wishlist;
  return (
        <Container className='mt-10'>
            <Row>
              <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Breadcrumbs props={props.propss2} />
              </Col>
                <Col sm={12} md={12} lg={3} xl={3} xxl={3}>
                  <Filter1 Filter1Parent="filter-responsiveness"/>
                  <FilterNav />
                </Col>

                <Col sm={12} md={12} lg={9} xl={9} xxl={9}>
                    <UnstitchedProductsMap props={props.propss} addOnWishlist={addOnWishlist} wishlist={wishlist} />
                </Col>
            </Row>
        </Container>
  )
}
