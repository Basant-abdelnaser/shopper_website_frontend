import React from "react";
import Hero from "../../Hero/Hero";

import Popular from "../../Components/Popular/Popular";
import Offers from "../../Components/offers/Offers";
import NewCollection from "../../Components/NewCollections/NewCollection";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollection />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Shop;
