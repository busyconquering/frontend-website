import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CartProduct() {
  return (
    <div>
      <div className='mt-20'>
        <Container>
            <Row>
                <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="border-2 p-2 text-center">PRODUCT</Col>
                <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="border-2 p-2 text-center">QUANTITY</Col>
                <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="border-2 p-2 text-center">TOTAL</Col>
                <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="border-2 p-2 text-center">
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/2277/5269/products/10_2_23166217-93ba-4b54-bda2-b17e62d4215b_300x.jpg?v=1667637753" alt="" />
                        <p>EMBROIDERED VELVET UF-257</p>
                    </div>
                </Col>
                <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="border-2 p-2 text-center">QUANTITY</Col>
                <Col sm={4} md={4} lg={4} xl={4} xxl={4} className="border-2 p-2 text-center">TOTAL</Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}
