import React from "react";
import Button from 'react-bootstrap/Button';

export default function RowDiv(props){
    return(
        <div>
            <div className="left-banner d-flex  flex-column w-25">
                <div className="row-title">
                    <h3>{props.title}</h3>
                </div>
                <Button variant="primary">VIEW ALL</Button>
                <br />
                <img src={props.bg_image} alt="Background" />
            </div>
            <div className="row-products">

            </div>
        </div>
    )
}