import Header from "./components/Header";
import "./App.css"
import SubHeader from "./components/SubHeader";
import CarouselBanner from "./components/CarouselBanner";
import RowDiv from "./components/RowDiv";

function App() {
  return (
    <div className="App">
      <Header/>
      <SubHeader/>
      <CarouselBanner/>
      <RowDiv title="Top Offers" bg_image="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/0b22f4bdbe5b032a.jpg?q=90"/>
      <RowDiv title="Today's Fashion Deals" bg_image="https://rukminim1.flixcart.com/flap/278/278/image/e84ecf024bdc49f4.jpg?q=90"/>
    </div>
  );
}

export default App;
