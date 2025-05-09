import Image from "next/image";
import React from "react";
import icon from "@/assest/imegs/icon.png";
import icon1 from "@/assest/imegs/icon1.png";
import icon2 from "@/assest/imegs/icon2.png";
import icon3 from "@/assest/imegs/icon3.png";
import icon4 from "@/assest/imegs/icon4.png";
import icon5 from "@/assest/imegs/icon5.png";
import icon6 from "@/assest/imegs/icon6.png";
import icon7 from "@/assest/imegs/icon7.png";
import icon8 from "@/assest/imegs/icon8.png";
import { useTranslations } from "next-intl";

const Service = () => {
  const t = useTranslations();
  return (
    <div className="continer w-[90%] mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md duration-500 flex flex-col items-center text-center gap-3">
          <Image src={icon} alt="Icon" width={150} />
          <h1 className="text-2xl">{t("loading")}</h1>
          <p className="">{t("short")}</p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md duration-500 flex flex-col items-center text-center gap-3">
          <Image src={icon1} alt="Icon" width={150} />
          <h1 className="text-2xl">{t("vepsayt")}</h1>
          <p className="">{t("provide")}</p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md duration-500 flex flex-col items-center text-center gap-3">
          <Image src={icon2} alt="Icon2" width={150} />
          <h1 className="text-2xl">{t("store")}</h1>
          <p className="">{t("sell")}</p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon3} alt="Icon3" width={150} />
          <h1 className="text-2xl">{t("crm")}</h1>
          <p className="">{t("automation")}</p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex  duration-500 flex-col items-center text-center gap-3">
          <Image src={icon4} alt="Icon4" width={150} />
          <h1 className="text-2xl">Portfolio saytlari</h1>
          <p className="">
            Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki
            ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.
          </p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon5} alt="Icon5" width={150} />
          <h1 className="text-2xl">{t("blog")}</h1>
          <p className="">{t("to1")}</p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon6} alt="Icon6" width={150} />
          <h1 className="text-2xl">{t("learning")}</h1>
          <p className="">{t("for")}</p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon7} alt="Icon7" width={150} />
          <h1 className="text-2xl">{t("erp")}</h1>
          <p className="">{t("erp1")}</p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon8} alt="Icon8" width={150} />
          <h1 className="text-2xl">{t("speatr")}</h1>
          <p className="">{t("also")}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
