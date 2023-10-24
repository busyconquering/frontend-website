import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MainpageproductsApis } from "./MainpageproductsApis";
import { Outlet, Link } from "react-router-dom";

export default function Mainpageproducts(props) {
  let prop = props.props;
  let pages=["/UNSTITCHED", "/DUPATTAS", "/READYTOWEAR", "/CHANTELLE", "/BOTTOMS", "/SHAWLS"]
  return (
    <Container className="mt-16 mb-16">
      <Row>
        {prop.map((Apis) => (
          <Col
            sm={12}
            md={6}
            lg={4}
            xl={4}
            xxl={4}
            key={Apis.ProductId}
            className="flex flex-col items-center"
          >
            <Link to={pages[Apis.ProductId]}>
            <img src={Apis.Productsrc} alt="" />
            </Link>
            <p className="mt-3 font-medium">{Apis.ProductTitle}</p>
            <p className="font-normal underline cursor-pointer hover:font-semibold ">
            <Link to={pages[Apis.ProductId]} className="text-black">

              Shop Now
              </Link>
            </p>
          </Col>
        ))}

      </Row>
    </Container>
  );
}
