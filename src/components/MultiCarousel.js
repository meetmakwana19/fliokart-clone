import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeProduct from "./HomeProduct";

export default function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1600 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 5,
    },
    desktop2: {
      breakpoint: { max: 1200, min: 900 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 850 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 850, min: 600 },
      items: 2,
    },
    x_mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} className="products-carousel">
      <HomeProduct
        product_img="https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"
        product_title="Iphone 14/14 plus"
        product_rate="inc of offers"
        product_info="fom 67,999*"
      />
      <HomeProduct
        product_img="https://rukminim1.flixcart.com/image/200/200/l30hmkw0/mobile/w/j/o/galaxy-s21-fe-5g-sm-g990ewziinu-samsung-original-image8dzwv3bch4k.jpeg?q=70"
        product_title="SAmsung S21 FE"
        product_rate="incl of offers"
        product_info="from 31,999*"
      />
      <HomeProduct
        product_img="https://rukminim1.flixcart.com/image/200/200/xif0q/air-conditioner-new/p/n/b/-original-imagzcecugsygdst.jpeg?q=70"
        product_title="4in1 Energy Efficient ACs"
        product_rate="From 21,490"
        product_info="marQ, realme, TechLife"
      />
      <HomeProduct
        product_img="https://rukminim1.flixcart.com/image/200/200/xif0q/mobile/z/x/x/-original-imagp55frhhddu6n.jpeg?q=70"
        product_title="Realme C55"
        product_rate="From 10,499"
        product_info='6.72" 90Hz FHD+Display'
      />
      <HomeProduct
        product_img="https://rukminim1.flixcart.com/image/200/200/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70"
        product_title="Vivo T1 44w"
        product_rate="From 12,999*"
        product_info="incl of offers"
      />
      <HomeProduct
        product_img="https://rukminim1.flixcart.com/image/200/200/l3ahpjk0/monitor/a/v/q/-original-imagefsf8hkyuhdj.jpeg?q=70"
        product_title="Curved Monitors"
        product_rate="From 7,999"
        product_info="Samsung Acer & More"
      />
      <HomeProduct
        product_img="https://rukminim1.flixcart.com/image/200/200/xif0q/bottle/s/c/d/1000-air-tight-fridge-school-collage-office-gym-men-women-kids-7-original-imagpfkxhjyu3twz.jpeg?q=70"product_title="Water Bottles"
        product_rate="From 119"
        product_info="Cello & More"
      />
      <HomeProduct
        product_img="https://rukminim1.flixcart.com/image/200/200/xif0q/chopper/8/b/f/-original-imagqtdmmxykt9d8.jpeg?q=70"
        product_title="Chopper"
        product_rate="From 99"
        product_info="Pigeon & More"
      />
    </Carousel>
  );
}
