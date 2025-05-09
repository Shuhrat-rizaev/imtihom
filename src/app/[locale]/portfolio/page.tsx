import Navbar from "@/companents/Navbar";
import React from "react";
import Header from "./Header";
import Loyihalar from "@/companents/Loyihalar";
import Footer from "@/companents/Footer";

const page = () => {
  return (
    <div className="bg-[#0E041D] text-white">
      <Navbar />
      <Header />
      <Loyihalar />
      <Footer />
    </div>
  );
};

export default page;
