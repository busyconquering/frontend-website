import React from "react";
import { Formik, Form } from "formik";
import InputFieldForm from "./InputFieldForm";
import FormPageProducts from "./FormPageProducts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectCountries from "./SelectCountries";
import * as Yup from "yup";
import "./Form.css";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FormsBreadcrumbs from "./FormsBreadcrumbs";
import FormPageResponsiveProducts from "./FormPageResponsiveProducts";
import { useLocation } from "react-router-dom";


export default function FormiksForm() {
  let validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    firstName: Yup.string()
      .min(3, "Your first name is required")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Your last name is required")
      .required("Required"),
    address: Yup.string()
      .min(20, "Must be at least 20 characters or more")
      .required("Required"),
    city: Yup.string()
      .min(20, "Must be at least 20 characters or more")
      .min(3, "")
      .required("Your City name is required"),
    phone: Yup.string()
      .min(9, "Phone number must be at least 9 digits")
      .max(15, "Phone number should be less than 15 digits")
      .required("Required"),
  });


  const location = useLocation()
  const  MainImageSrc  = location.state.MainImageSrc;
  const  ProductTitle  = location.state.ProductTitle;
  const  ProductPrice  = location.state.ProductPrice;
  const  productsQuantity  = location.state.productsQuantity;


  return (
    <div>
      <div>
        <Row className="m-0">
          <div className="flex flex-row">
            <Col
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="bg-white mt-4 mb-5"
            >
              <Formik
                initialValues={{
                  email: "",
                  firstName: "",
                  lastName: "",
                  address: "",
                  addressOptional: "",
                  city: "",
                  postalCode: "",
                  phone: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => console.log(values)}
              >
                <Form>
                  <div className="w-64">
                    <img
                      src="https://cdn.shopify.com/s/files/1/2277/5269/files/unnamed__1_-removebg-preview.png?30106"
                      alt=""
                      className="w-64 mb-5 ml-10"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-page-responsive-products">
                      <FormPageResponsiveProducts />
                    </div>
                  </div>

                  <div className=" pl-10 pr-10">
                    <FormsBreadcrumbs />
                    <div className="mt-2 font-sans flex flex-row justify-between">
                      <p className="text-normal font-normal">Contact Information</p>
                      <div className="flex flex-row text-sm font-normal">
                        <p className="mr-1">Already have an account?</p>
                        <p className="hover:underline cursor-pointer ">
                          <Link to="/Login" className="hover:text-black text-blue-700">
                            Log in
                          </Link>
                        </p>
                      </div>
                    </div>
                    <InputFieldForm label="Email" name="email" type="email" />

                    <div className="mt-2 mb-8 text-base font-sans font-light">
                      <p>Email me with news and offers</p>
                    </div>

                    <div className="text-lg font-sans font-normal">
                      <p>Shipping address</p>
                    </div>

                    <SelectCountries />
                    <div className="flex flex-row">
                      <div className="mr-2 w-full">
                        <InputFieldForm
                          label="First name"
                          name="firstName"
                          type="text"
                        />
                      </div>
                      <div className="w-full">
                        <InputFieldForm
                          label="Last name"
                          name="lastName"
                          type="text"
                        />
                      </div>
                    </div>
                    <InputFieldForm label="Address" name="address" type="text" />
                    <InputFieldForm
                      label="Apartment, suite etc. (optional)"
                      name="addressOptional"
                      type="text"
                    />
                    <div className="flex flex-row">
                      <div className="mr-2 w-full">
                        <InputFieldForm label="City" name="city" type="text" />
                      </div>
                      <div className="w-full postalcss">
                        <InputFieldForm
                          label="Postal code"
                          name="postalCode"
                          type="number"
                        />
                      </div>
                    </div>
                    <InputFieldForm label="Phone" name="phone" type="number" />
                    <div className="text-base font-sans font-light">
                      <p>Save this information for next time</p>
                    </div>

                    <div className="font-sans flex flex-row items-center justify-between mt-4">
                      <p className="text-normal font-normal">
                        <Link to="/Cart" className="no-underline hover:text-black flex flex-row text-blue-700">
                          <div>
                            <KeyboardArrowLeftIcon className="mb-1" />
                          </div>
                          <div>
                            Return to cart
                          </div>
                        </Link>
                      </p>
                      <button className="btn btn-primary p-3" type="submit">
                        <p className="font-semibold m-0">Continue to shipping</p>
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </Col>

            <Col
              lg={6}
              xl={6}
              xxl={6}
              className="bg-gray-50 shadow-inner pt-4 form-page-products"
            >
              <div className="mb-10">
                <FormPageProducts MainImageSrc={MainImageSrc} ProductTitle={ProductTitle} ProductPrice={ProductPrice} productsQuantity={productsQuantity} />
              </div>
            </Col>
          </div>

        </Row>
      </div>
    </div>
  );
}