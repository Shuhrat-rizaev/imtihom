import Image from "next/image";
import React from "react";
import group from "@/assest/imegs/group1.png";

const Header = () => {
  return (
    <div className="mt-15">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left -mt-30 ">
            <h1 className="text-3xl md:text-5xl w-full md:w-[500px] h-[232] ml-4 md:ml-26">
              <p className="py-2 font-Inter font-bold">Tajribamiz davomida</p>
              <p className=""> turli xil hajmdagi</p>
              <p className="py-2 font-Inter font-bold text-[#5A00DB]">
                IT loyihalarini
              </p>
              <p className="py- w-2xl font-Inter font-bold">
                ishga tushira oldik
              </p>
            </h1>
          </div>
          <div className="relative w-full max-w-[900px] mt-8 md:mt-0">
            <Image src={group} alt="Loptop" width={900} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
