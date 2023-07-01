import React from "react";

export default function HomeProduct(props){
    return(
        <div className="home-product d-flex flex-column">
            <img src={props.product_img} alt="Product" />
            <h6>{props.product_title}</h6>
            <small className="text-success">{props.product_rate}</small>
            
            <small className="text-secondary">{props.product_info}</small>
        </div>
    )
}