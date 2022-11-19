import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="producr-image"
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">Rs. {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
