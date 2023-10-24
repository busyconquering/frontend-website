import React from "react";
import Container from "react-bootstrap/Container";
// import {Link} from "react-router-dom"
import "./Mainpagecss.css";
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
  let links = [
    {
      name: "WHO WE ARE",
      link: "WHOWEARE",
    },
    {
      name: "CONTACT US",
      link: "CONTACTUS",
    },
    {
      name: "OUR RESPONSIBILITIES",
      link: "OURRESPONSIBILITIES",
    },
    {
      name: "EXCHANGE & REFUND",
    },
    {
      name: "EXCHANGE FORM",
    },
    {
      name: "SHIPPING",
    },
    {
      name: "LOOK BOOK",
    },
    {
      name: "TRACK YOUR ORDER",
    },
    {
      name: "ORDER CANCELLATION FORM",
    },
    {
      name: "CUSTOMISED STITCHING",
    },
    {
      name: "CAREERS",
    },
    {
      name: "LEGAL",
    },
    {
      name: "FAQ'S",
    },
  ];
  return (
    <div className="bg-gray-200 pt-8 pb-2 text-center text-sm">
      <Container>
        {links.map((item, index) => (
          <div className="border-r-2 border-r-gray-400 pr-4 pl-4 inline-block mb-3 media-queries-for-footer" key={index}>
            <Link
              to={item.link}
              className="text-gray-500 hover:text-gray-500 m-0 text-uppercase hover:no-underline hover:cursor-pointer media-queries-for-footer"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </Container>
    </div>
  );
}
