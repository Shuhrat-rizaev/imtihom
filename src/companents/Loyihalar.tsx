import Image from "next/image";
import React from "react";
import img from "@/assest/imegs/img.png";
import imges from "@/assest/imegs/imges.png";
import noventer from "@/assest/imegs/noventer.png";
import fon from "@/assest/imegs/fon.png";
import fon1 from "@/assest/imegs/fon.png";
import fon2 from "@/assest/imegs/fon.png";
import fon3 from "@/assest/imegs/fon.png";
import { useTranslations } from "next-intl";

const Loyihalar = () => {
  const t = useTranslations();
  return (
    <div className="container w-[90%] mx-auto mt-26 relative">
      <div className="text-center flex flex-col gap-4 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          {t("project")}
        </h1>
        <p>{t("let")}</p>
        <Image
          src={fon}
          alt="fon"
          width={400}
          className="absolute top-0 left-1/2 opacity-70 -translate-x-1/2 z-0"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 mt-20 relative z-10">
        <Image
          src={img}
          alt="Images "
          width={638}
          className="rounded-2xl w-full lg:w-[50%]"
        />
        <div className="w-full lg:w-[50%] flex flex-col gap-3 justify-center">
          <h1 className="text-xl md:text-2xl">{t("tourman")}</h1>
          <p>{t("to")}</p>
          <button className="px-4 py-2 w-54 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("idea")}
          </button>
          <Image
            src={fon1}
            alt="fon"
            width={400}
            className="absolute top-[700px] left-20 -translate-x-1/2 z-0 hidden lg:block"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 mt-20 relative z-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-4  justify-center text-right">
          <h1 className="text-xl md:text-2xl">{t("prorun")}</h1>
          <p>{t("Prorun")}</p>
          <button className="px-4 py-2 w-54 self-end text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("idea")}
          </button>
        </div>
        <Image
          src={imges}
          alt="Images "
          width={638}
          className="rounded-2xl w-full lg:w-[50%]"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-7 mt-20 relative z-10">
        <Image
          src={noventer}
          alt="Images "
          width={638}
          className="rounded-2xl w-full lg:w-[50%]"
        />
        <div className="w-full lg:w-[50%] flex flex-col gap-3 justify-center">
          <h1 className="text-xl md:text-2xl">{t("peopels")}</h1>
          <p>{t("more")}</p>
          <button className="px-4 py-2 w-54 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("idea")}
          </button>
          <Image
            src={fon2}
            alt="fon"
            width={400}
            className="absolute top-0 -right-60 -translate-x-1/2 z-0 hidden lg:block"
          />
        </div>
      </div>

      <div className="relative mt-10 hidden lg:block">
        <Image
          src={fon3}
          alt="fon"
          width={400}
          className="absolute bottom-54 right-10 -translate-x-1/2 z-0"
        />
      </div>

      <div className="text-center mt-20">
        <button className="py-3 px-4 rounded-lg bg-[#5A00DB] font-semibold hover:bg-[#5b00dbc6]">
          {t("check")}
        </button>
      </div>
    </div>
  );
};

export default Loyihalar;
