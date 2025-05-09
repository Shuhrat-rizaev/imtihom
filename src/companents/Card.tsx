import { useTranslations } from "next-intl";
import React from "react";

const Card = () => {
  const t =useTranslations()
  return (
    <div className="bg-[#5A00DB] py-7 mt-20">
      <div className="container mx-auto px-4">
        <div className="w-full md:w-[90%] lg:w-[70%] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-Inter font-semibold px-4 sm:px-12 text-white">
           {t("us")}
          </h1>
          <p className="px-4 sm:px-12 text-white text-base   sm:text-lg">
           {t("brift")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
