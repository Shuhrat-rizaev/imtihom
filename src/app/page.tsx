import Card from "@/companents/Card";
import Cards from "@/companents/Cards";
import Footer from "@/companents/Footer";
import Header from "@/companents/Header";
import Loyihalar from "@/companents/Loyihalar";
import Navbar from "@/companents/Navbar";
import Service from "@/companents/Service";

export default function Home() {
  return (
    <div className="bg-[#0E041D] text-white">
      <Navbar />
      <Header />
      <Card />
      <Cards />
      <Loyihalar />
      <Service />
      <Footer />
    </div>
  );
}
