import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CONTACTUS() {
  return (
    <div>
      <Container className="pb-24 ">
        <Row>
          <Col
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
            className="pt-16 mr-52"
          >
            <div className="flex flex-row mb-4">
            <input type="text" placeholder="Name" className="border-2 w-full mr-2 form-control" />
            <input type="text" placeholder="Email" className="border-2 w-full form-control" />
            </div>
            <div className="mb-4">
            <input type="text" placeholder="Phone Number" className="border-2 w-full mr-2 form-control" />
            </div>
            <div className="mb-10">
                <textarea name="" id="" cols="30" rows="10" placeholder="Comment" className="border-2 w-full mr-2 form-control resize-none"></textarea>
            </div>
            <div className="mb-1">
                <button className="bg-secondary text-white pl-4 pr-4 pt-2 pb-2">Send</button>
            </div>
          </Col>
            
          <Col sm={12} md={12} lg={4} xl={4} xxl={4} className="pt-16 pb-14">
            <p>
              <span className="font-semibold">Phone : </span> +92-307-9459
            </p>
            <p>
              <span className="font-semibold">WhatsApp : </span> +92-307-9459
            </p>
            <p>
              <span className="font-semibold">EMAIL : </span>{" "}
              mubbasheryasin125@gmail.com
            </p>
            <p>
              <p className="font-medium underline">Customer Service Hours </p>{" "}
              Monday - Saturday 10AM – 6PM PST
            </p>
            <p>
              <p className="font-medium underline">Address </p> Ashiyana Road,
              Bank Stop, Chungi Amer Sidhu, Lahore
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
