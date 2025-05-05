import Image from "next/image";
import React from "react";
import group from "@/assest/imegs/Group.png";

const Header = () => {
  return (
    <div className="">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left  ">
            <h1 className="text-3xl md:text-5xl w-full md:w-[500px] h-[232] ml-4 md:ml-26">
              <p className="py-2 font-Inter font-bold">Har bir xizmat turini</p>
              <p className=""> aniqlikka asoslanib</p>
              <p className="py-2 font-Inter font-bold text-[#5A00DB]">
                har bir mijoz uchun
              </p>
              <p className="py- w-2xl font-Inter font-bold">
                alohida ahamiyatli
              </p>
            </h1>
          </div>
          <div className=" w-full max-w-[900px]  md:mt-0">
            <Image src={group} alt="Loptop" width={900} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
