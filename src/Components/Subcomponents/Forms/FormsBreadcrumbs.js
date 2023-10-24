import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Outlet, Link } from "react-router-dom";

function FormsBreadcrumbs(props) {
  return (
    <div>
      <Breadcrumb className="text-xs">
        <Breadcrumb.Item className="no-underline" active>
          <Link to="/Cart" className="no-underline">
            <div className="no-underline text-blue-700 hover:text-black">
            Cart
            </div>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Information
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Shipping
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Payment
        </Breadcrumb.Item>
      </Breadcrumb>
      <Outlet />
    </div>
  );
}

export default FormsBreadcrumbs;