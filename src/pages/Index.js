import React from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Cursor from "./Cursor";
import HeaderBanner from "./Component/Components/HeaderBanner";
import Aboutus from "./Component/Components/About";
import "./../index.css";
import Service from "./Component/Components/Service";
import Experience from "./Component/Components/Experience";
import EducationSkills from "./Component/Components/EducationSkills";
import MyPortfolio from "./Component/Components/MyPortfolio";

import CustomerReview from "./Component/Components/CustomerReview";
import ScrollButton from "./Component/ScrollButton";
const Index = () => {
  return (
    <div className="App">
      <Header />
      <Cursor />
      <HeaderBanner />
      <Aboutus />
      <Service />
      <Experience/>
      <EducationSkills/>
      <MyPortfolio/>
      <CustomerReview/>
      
      <Footer />
      <ScrollButton/>
    </div>
  );
};

export default Index;
