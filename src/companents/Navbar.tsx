"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import LangSwitch from "./LangSwitch";
import Link from "next/link";

const Navbar = () => {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="container w-[90%] mx-auto p-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <div className="flex items-center space-x-2 p-2">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-4 h-4 bg-purple-500 col-start-1 row-start-1"></div>
          <div className="w-4 h-4 bg-purple-700"></div>
          <div className="w-4 h-4 bg-purple-900 col-span-2 row-start-2"></div>
        </div>
        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-Inter">
          Noventer
        </span>
      </div>

      {/* Hamburger Icon (visible on mobile and tablet) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md: md:w-auto md:block`}
      >
        <ul className="flex flex-wrap  justify-center gap-4 md:gap-8 text-sm sm:text-base">
          <Link href="/">
            <li className="hover:text-blue-400">{t("greeting")}</li>
          </Link>{" "}
          <Link href="/xizmatlar">
            <li className="hover:text-blue-400">{t("about")}</li>
          </Link>{" "}
          <Link href="/portfolio">
            <li className="hover:text-blue-400">Portfolio</li>
          </Link>
          <li className="hover:text-blue-400">{t("aloqa")}</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
        <LangSwitch />

        <button className="px-4 py-2 text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
          {t("idea")}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
