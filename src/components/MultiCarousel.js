import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeProduct from "./HomeProduct";

export default function MultiCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
        product_img="https://rukminim1.flixcart.com/image/200/200/l3ahpjk0/monitor/a/v/q/-original-imagefsf8hkyuhdj.jpeg?q=70"
        product_title="Curved Monitors"
        product_rate="From 7,999"
        product_info="Samsung Acer & More"
      />
      <HomeProduct
        product_img=""
        product_title=""
        product_rate=""
        product_info=""
      />
    </Carousel>
  );
}
