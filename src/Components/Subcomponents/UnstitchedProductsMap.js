import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UnstitchedSourcesthroughApis from './UnstitchedSourcesthroughApis';

export default function SecondPageRight(props) {
    const  addOnWishlist = props.addOnWishlist; 
    const wishlist = props.wishlist;
  return (
    <div>
        <Container>
            <Row>
                {props.props.map((UnstitchedApis, index) =>{
                    return(
                        <Col sm={12} md={6} lg={4} xl={4} xxl={4} key={index}>
                            <UnstitchedSourcesthroughApis UnstitchedApisData={UnstitchedApis} addOnWishlist={addOnWishlist} wishlist={wishlist} />
                        </Col>
                    )
                })}
        </Row>
        </Container>
    </div>
  )
}
