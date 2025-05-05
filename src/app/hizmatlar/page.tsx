import React from "react";
import Navbar from "./companents/Navbar";
import Header from "./companents/Header";
import Cards from "./companents/Cards";
import Footer from "./companents/Footer";

const page = () => {
  return (
    <div className="bg-[#0E041D] text-white">
      <Navbar />
      <Header />
      <Cards />
      <Footer />
    </div>
  );
};

export default page;
