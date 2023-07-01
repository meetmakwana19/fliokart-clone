import React from "react";

export default function CategoryNav(props){
    return(
        <div className="category-nav w-50 d-flex flex-column align-items-center">
            <img src={props.category_image} alt="Category Img" className="w-aut"/>
            <small className="text-center">{props.category_name}</small>
        </div>
    )
}