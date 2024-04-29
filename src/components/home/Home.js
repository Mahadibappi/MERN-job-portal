import React from "react";
import Banner from "../banner/Banner";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
