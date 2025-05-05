import Image from "next/image";
import React from "react";
import komputer from "@/assest/imegs/Main page/Komputer.png";
import v1 from "@/assest/imegs/v1.png";
import v2 from "@/assest/imegs/v2.png";
import v3 from "@/assest/imegs/v3.png";
import v4 from "@/assest/imegs/v4.png";

const Header = () => {
  return (
    <div className="mt-15">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left -mt-30 ">
            <h1 className="text-3xl md:text-5xl w-full md:w-[500px] h-[232] ml-4 md:ml-26">
              <p className="py-2 font-Inter font-bold">Yuqori sifatdagi</p>
              <p className=""> aniqlikka asoslanib</p>
              <p className="py-2 font-Inter font-bold text-[#5A00DB]">
                istalgan turdagi
              </p>
              <p className="py- w-2xl font-Inter font-bold">
                dasturlarni tayyorlaymiz
              </p>
            </h1>
            <button className="py-3 px-4 rounded-lg mt-2 bg-[#5A00DB] ml-4 md:ml-26 font-semibold hover:bg-[#5b00dbc6]">
              Xizmatlar haqida
            </button>
          </div>
          <div className="relative w-full max-w-[900px] mt-8 md:mt-0">
            <Image src={komputer} alt="Loptop" width={900} className="w-full" />
          </div>
        </div>

        <div className=" flex flex-wrap justify-center gap-6 md:gap-12 container w-[90%] mx-auto relative md:absolute md:-bottom-28 left-1/2 -translate-x-1/2 mt-20 md:mt-0">
          <div className="px-4 py-2 text-white text-lg font-semibold border border-white/30 rounded-xl bg-white/2 backdrop-blur-md hover:bg-transparent hover:backdrop-blur transition-all shadow-md flex items-center w-[220px] ml-0 md:ml-12">
            <Image src={v1} alt="Logo" width={60} />
            <div>
              <p>7+yillik</p>
              <p>Umumiy tajriba</p>
            </div>
          </div>
          <div className="px-4 py-2 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur-md hover:bg-transparent hover:backdrop-blur transition-all shadow-md flex items-center w-[220px]">
            <Image src={v2} alt="Logo" width={60} />
            <div>
              <p>5+</p>
              <p>Yirik loyihalar</p>
            </div>
          </div>
          <div className="px-4 py-2 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur-md hover:bg-transparent hover:backdrop-blur transition-all shadow-md flex items-center w-[220px]">
            <Image src={v3} alt="Logo" width={60} />
            <div>
              <p>8+</p>
              <p>Xizmat turlari</p>
            </div>
          </div>
          <div className="px-4 py-2 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-transparent hover:backdrop-blur transition-all shadow-md flex items-center w-[220px]">
            <Image src={v4} alt="Logo" width={60} />
            <div>
              <p>100%</p>
              <p>Xavfsizlik</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
