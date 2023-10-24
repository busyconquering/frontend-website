import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Outlet, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import mainLogo from "../../Assets/mainLogo.png"
import "./Icons.css";
import "./MainPageStyle.css";

function Navigation(props) {

  const WishlistCount = props.WishlistCount;
  const cartSize = props.cartSize;

  let onLikeHeartColor = 'text-black cursor-pointer w-5'
  if (WishlistCount > 0) {
    onLikeHeartColor = 'text-red-500 cursor-pointer w-5';
  }
  else {
    onLikeHeartColor = 'cursor-pointer w-5 text-black';
  }

  return (
    <div className='sticky top-0 z-20'>
      <nav>
        {[false].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} >
            <Container fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='border-0 shadow-none' />
              <Navbar.Brand className='mx-auto'>
                <Link to="/" className='no-underline text-black'>
                  <img src={mainLogo} alt="" className='w-16' />
                </Link>
              </Navbar.Brand>

              {/* Icons for Navbar */}
              <CiSearch className='text-2xl mr-3 cursor-pointer' />

              <Link to="/Wishlist" className='text-black mr-3 no-underline flex justify-center items-center'>
                <BsHeart className={`cursor-pointer text-xl ${onLikeHeartColor}`} />
                <span className='pl-1 pb-1'>{WishlistCount}</span>
                {/* <FavoriteBorderIcon className={`icon-size cursor-pointer ${onLikeHeartColor}`} />
              <span>{WishlistCount}</span> */}
              </Link>
              <Link to="/Login" className='text-black mr-3'>
                <BsPerson className='text-xl cursor-pointer' />
              </Link>
              <div className='flex flex-row justify-center items-center'>
                <Link to="/Cart" className='text-black flex flex-row items-center no-underline'>
                  <BsBag className='Mall-icon-size text-xl text-xl cursor-pointer' />
                  <span className='pl-1 pb-1'>({cartSize})</span>
                </Link>

              </div>

              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton className="ml-2 mr-5">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                    <div className="text-base font-bold">
                      MENU
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to="/" className='text-black no-underline hover:text-gray-600 bg-gray-100 hover:bg-gray-200 mb-1 pl-2 pt-1 pb-1'>Home</Link>
                    <Link to="/UNSTITCHED" className='text-black no-underline bg-gray-100 hover:bg-gray-200 mb-1 pl-2 pt-1 pb-1'>UNSTITCHED</Link>
                    <Link to="/DUPATTAS" className='text-black no-underline bg-gray-100 hover:bg-gray-200 mb-1 pl-2 pt-1 pb-1'>DUPATTAS</Link>
                    <Link to="/READYTOWEAR" className='text-black no-underline bg-gray-100 hover:bg-gray-200 mb-1 pl-2 pt-1 pb-1'>READY TO WEAR</Link>
                    <Link to="/CHANTELLE" className='text-black no-underline bg-gray-100 hover:bg-gray-200 mb-1 pl-2 pt-1 pb-1'>SPECIAL PRICES</Link>
                    <Link to="/BOTTOMS" className='text-black no-underline bg-gray-100 hover:bg-gray-200 mb-1 pl-2 pt-1 pb-1'>BOTTOMS</Link>
                    <Link to="/SHAWLS" className='text-black no-underline bg-gray-100 hover:bg-gray-200 mb-1 pl-2 pt-1 pb-1'>SHAWLS</Link>

                  </Nav>
                  <Form className="d-flex pt-3 pr-4">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <Outlet />
      </nav>
    </div>
  );
}

export default Navigation;