import Image from "next/image";
import React from "react";
import logo from "@/assest/imegs/Main page/logo.png";
import logo1 from "@/assest/imegs/logo1.png";

const Navbar = () => {
  return (
    <div className="container w-[90%] mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      {/* Logo */}
      <div className="flex items-center space-x-2 p-2">
        {/* <Image src={logo} alt="Logotep" width={24} />
        <Image src={logo1} alt="Logotep" width={9}  /> */}
        <div className="grid grid-cols-2 gap-1">
          <div className="w-4 h-4 bg-purple-500 col-start-1 row-start-1"></div>
          <div className="w-4 h-4 bg-purple-700"></div>
          <div className="w-4 h-4 bg-purple-900 col-span-2 row-start-2"></div>
        </div>
        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-Inter">
          Noventer
        </span>
      </div>

      {/* Menu */}
      <div>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm sm:text-base">
          <li className="hover:text-blue-400">Bosh sahifa</li>
          <li className="hover:text-blue-400">Portfolio</li>
          <li className="hover:text-blue-400">Xizmatlar</li>
          <li className="hover:text-blue-400">Aloqa</li>
        </ul>
      </div>

      {/* Language & Button */}
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <select
          defaultValue=""
          className="px-4 py-2 text-white font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md"
        >
          <option value="uz" className="bg-gray-800">
            Uz
          </option>
          <option value="en" className="bg-gray-800">
            En
          </option>
        </select>

        <button className="px-4 py-2 text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
          Loyiha bormi?
        </button>
      </div>
    </div>
  );
};

export default Navbar;
