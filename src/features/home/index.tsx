"use client";
import "./home.css";
import Banner from "./components/Banner/BannerWrapper";
import LatestProducts from "./components/latestProducts/LatestProducts";
import OurBrands from "./components/OurBrands";
import OrderSecurity from "./components/orderSecurity/OrderSecurity";
import PopularProducts from "./components/PopularProducts";
import Deals from "./components/Deals";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-y-20">
      <Banner />
      <OrderSecurity />
      <PopularProducts />
      <LatestProducts />
      <Deals />
      <OurBrands />
    </div>
  );
};

export default Home;