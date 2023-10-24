import React from "react";
import Magnifier from "@computeruniverse/react-magnifier";

export default function ImageZoom3() {
  return (
    <div>
      <Magnifier
        zoomImg={
          "https://cdn.shopify.com/s/files/1/2277/5269/products/31_8.jpg?v=1642674463"
        }
        zoomImgHeight={1800}
        zoomImgWidth={1200}
        offsetLeft={20}
      >
        <img
          src={
            "https://cdn.shopify.com/s/files/1/2277/5269/products/31_8.jpg?v=1642674463"
          }
          width="300"
          alt="Lorem picsum "
        />
      </Magnifier>

      {/* Npm install and sources */}
      {/* {npm i @computeruniverse/react-magnifier} */}
      {/* {'https://picsum.photos/id/190/1000/1000'} */}
      {/* {'https://picsum.photos/id/190/400/400'} */}
    </div>
  );
}
