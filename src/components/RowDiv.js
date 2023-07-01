import React from "react";
import Button from "react-bootstrap/Button";
import "react-multi-carousel/lib/styles.css";
import MultiCarousel from "./MultiCarousel";

export default function RowDiv(props) {
  return (
    <div className="row-div d-flex flex-row w-75">
      <div className="left-banner d-flex  flex-column">
        <div className="row-title">
          <h3>{props.title}</h3>
        </div>
        <Button variant="primary">VIEW ALL</Button>
        <br />
        <img src={props.bg_image} alt="Background" />
      </div>
      <div className="row-products d-flex d-row w-100">
        <MultiCarousel/>
      </div>
    </div>
  );
}
