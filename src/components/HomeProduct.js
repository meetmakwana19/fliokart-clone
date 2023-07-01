import React from "react";

export default function HomeProduct(props) {
  return (
    <div className="home-product d-flex flex-column">
      <div className="home-prod-img-div">
        <img src={props.product_img} alt="Product"/>
      </div>
      <div className="home-product-text-div">
        <h6>{props.product_title}</h6>
        <small className="text-success">{props.product_rate}</small>
        <br />
        <small className="text-secondary">{props.product_info}</small>
      </div>
    </div>
  );
}
