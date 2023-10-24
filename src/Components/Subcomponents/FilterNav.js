
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Filter1 from './Filter1';
import TuneIcon from '@mui/icons-material/Tune';
import "./Filter1.css"

function OffcanvasExample(props) {
  return (
    <div className={`filter-nav-parent-for-media-queries abcde ${props.FilterNavParent}`}>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 bg-transparent w-40">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  className='border-0 shadow-none flex flex-row'>
              <TuneIcon className='mr-4 text-black' /><p className='text-black hover:underline'>Filter</p>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
                <Filter1 Filter1Parent={"ml-10 mr-10"}/>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasExample;