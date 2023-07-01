import React from "react";
import CategoryNav from "./CategoryNav";

export default function SubHeader() {
  return (
    // Number of sub-divs/cols for the categories
    <div className="sub-header">
      <div className="sub-sub-header d-flex">
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          category_name="Grocery"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          category_name="Mobiles"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100"
          category_name="Fashion"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
          category_name="Electronics"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
          category_name="Home & Furniture"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
          category_name="Appliances"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
          category_name="Airlines"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
          category_name="Top Offers"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
          category_name="Beauty, Toys & More"
        />
        <CategoryNav
          category_image="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
          category_name="Two Wheelers"
        />
      </div>
    </div>
  );
}
