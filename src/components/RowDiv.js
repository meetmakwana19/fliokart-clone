import React from "react";
import Button from 'react-bootstrap/Button';
import HomeProduct from "./HomeProduct";

export default function RowDiv(props){
    return(
        <div className="row-div d-flex flex-row">
            <div className="left-banner d-flex  flex-column w-25">
                <div className="row-title">
                    <h3>{props.title}</h3>
                </div>
                <Button variant="primary">VIEW ALL</Button>
                <br />
                <img src={props.bg_image} alt="Background" />
            </div>
            <div className="row-products d-flex d-row">
                <HomeProduct product_img="https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70" product_title="Iphone 14/14 plus" product_rate="inc of offers" product_info="fom 67,999*"/>
                <HomeProduct product_img="https://rukminim1.flixcart.com/image/200/200/l30hmkw0/mobile/w/j/o/galaxy-s21-fe-5g-sm-g990ewziinu-samsung-original-image8dzwv3bch4k.jpeg?q=70" product_title="SAmsung S21 FE" product_rate="incl of offers" product_info="from 31,999*"/>
                <HomeProduct product_img="https://rukminim1.flixcart.com/image/200/200/xif0q/air-conditioner-new/p/n/b/-original-imagzcecugsygdst.jpeg?q=70" product_title="4in1 Energy Efficient ACs" product_rate="From 21,490" product_info="marQ, realme, TechLife"/>
                <HomeProduct product_img="https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/z/x/x/-original-imagp55frhhddu6n.jpeg?q=70" product_title="Realme C55" product_rate="From 10,499" product_info='6.72" 90Hz FHD+Display'/>
                <HomeProduct product_img="https://rukminim1.flixcart.com/image/200/200/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70" product_title="Vivo T1 44w" product_rate="From 12,999*" product_info="incl of offers"/>
                <HomeProduct product_img="https://rukminim1.flixcart.com/image/200/200/l3ahpjk0/monitor/a/v/q/-original-imagefsf8hkyuhdj.jpeg?q=70" product_title="Curved Monitors" product_rate="From 7,999" product_info="Samsung Acer & More"/>
                <HomeProduct product_img="" product_title="" product_rate="" product_info=""/>
            </div>
        </div>
    )
}