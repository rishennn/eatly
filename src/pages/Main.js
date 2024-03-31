import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Feauters from "../components/Feauters/Feauters";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import Top from "../components/Top/Top";
import Dishes from "../components/Dishes/Dishes";
import Control from "../components/Control/Control";
import Slider from "../components/Slider/Slider";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <Feauters />
      <DownloadApp />
      <Top />
      <Dishes />
      <Control />
      <Slider />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Main;
