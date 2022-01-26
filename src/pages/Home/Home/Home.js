import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import HomeArticle from "../HomeArticle/HomeArticle";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <HomeArticle />
      <Footer />
    </>
  );
};

export default Home;
