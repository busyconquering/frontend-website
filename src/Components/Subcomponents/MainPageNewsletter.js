import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet, Link } from "react-router-dom";
import StyleGuidePage from './StyleGuidePage';
import "./MainPageStyle.css"

export default function MainPageNewsletter() {
    return (
        <div className='mb-20'>
            <Container className='z-0'>
                <Row>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} className="p-0">
                        <Link to="/StyleGuidePage">
                            <img src="https://gravitec.net/blog/wp-content/uploads/2019/10/news-530220_640.jpg" alt="" width={670} className='h-96' />
                        </Link>

                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6} xxl={6} className="newletter-bg-color flex flex-col justify-center items-center text-center  h-96">
                        <div className='font-semibold'>GET 5% OFF!</div>
                        <div className='mt-3'>SIGN UP NOW TO OUR NEWSLETTER</div>
                        <div className='flex flex-row items-center mt-3'>
                            <input className='w-48 p-2' type="text" />
                            <button className='bg-dark text-white pt-2 pb-2 pl-4 pr-4'>SIGN ME UP</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Outlet />
        </div>
    )
}
