import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Outlet, Link } from "react-router-dom";

function Breadcrumbs(props) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item className="no-underline" active>
          <Link to="/" className="no-underline">
            <div className="text-black no-underline">
            Home
            </div>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="cursor-default">
          {props.props}
        </Breadcrumb.Item>
      </Breadcrumb>
      <hr className="mb-8" />
      <Outlet />
    </div>
  );
}

export default Breadcrumbs;
