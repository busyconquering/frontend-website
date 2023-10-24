import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function StyleGuidePage() {
  return (
    <div>
        <div className='bg-gray-200'>
            <p className='text-center font-semibold text-3xl p-4'>STYLE GUIDE</p>
        </div>
        <div>
            <p className='text-center text-xl p-4'>A LOOK AT WHAT'S NEW IN FASHION. YOUR ULTIMATE STYLE GUIDE PAGE!</p>
        </div>
        <div className='flex flex-row justify-center'>
            <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/Style_guide_banner_main_-1.jpg?v=1663764757" alt="" />
        </div>
        <div>
            <p className='font-bold text-3xl m-4'>RUBY RED</p>
        </div>
        <div className='flex flex-row justify-center'>
            <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/311676567_1914952025341650_3656793912805375515_n.jpg?v=1667640906" alt="" />
        </div>

        <Container className='mt-3'>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6} >
                    <p className='font-bold text-3xl'>GLIMMERY GOWNS</p>
                    <p className='text-2xl'>Celestially crafted with exquisite thread and tilla work on a zinc canvas makes this stellar outfit. Symbolize your style in this eye-catching ensemble in a mesmerizing dark black hue. This three piece is perfect for qawali nights or your friend's valima. Straight sleek hair and dewy makeup with shimmery silver heels will amp up the whole look.</p>
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6} >
                    <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/271270188_156646883367034_1979716409944154405_n.jpg?v=1667640959" alt="" />
                </Col>
            </Row>
        </Container>      

        <Container className='mt-3 mb-10'>
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6} >
                    <img src="https://cdn.shopify.com/s/files/1/2277/5269/files/311270082_1026310244707347_7239514526168205967_n.jpg?v=1667640988" alt="" />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} xxl={6} >
                    <p className='font-bold text-3xl'>VIVIDLY VELVET</p>
                    <p className='text-2xl'>Traditional dresses are always in trend. They are classic and timeless. Radiate poise and perfection in this stunning black look, embellished to perfection. Rendered on rich fabric and intricately embroidered velvet canvas. This beautifully embellished dupatta and silk pants, radiates the ultimate glow that you need for the upcoming festivities.

</p>
                </Col>
            </Row>
        </Container>      
    </div>
  )
}
