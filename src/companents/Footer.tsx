import Image from "next/image";
import React from "react";
import avatar from "@/assest/imegs/avatar.png";
import fon from "@/assest/imegs/fon.png";
import fon1 from "@/assest/imegs/fon.png";
import fon2 from "@/assest/imegs/fon.png";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <div className="container mx-auto w-[90%] mt-20 pb-30 relative">
      <div className="relative">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-40 left-0 -translate-x-1/2"
        />
        <Image
          src={fon1}
          alt="fon"
          width={300}
          className="absolute bottom-40 left-60 -translate-x-1/2"
        />
        <div className="relative">
          <Image
            src={fon}
            alt="fon"
            width={300}
            className="absolute -top-24 left-0 -translate-x-1/2"
          />
          <Image
            src={fon1}
            alt="fon"
            width={300}
            className="absolute top-80 -right-44 -translate-x-1/2 z-0"
          />
          <Image
            src={fon2}
            alt="fon"
            width={300}
            className="absolute bottom-0 right-1 -translate-x-1/2 z-0"
          />
        </div>
      </div>

      <div className="items-center flex flex-col gap-3 relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl">{t("contac")}</h1>
        <p className="text-base md:text-lg">{t("will")}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 relative z-10 px-4">
        <div className="mt-10 p-4 border border-gray-500 rounded-xl w-full lg:w-[920px] backdrop-blur hover:bg-transparent hover:backdrop-blur">
          <h1 className="text-2xl py-3">{t("tea")}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex w-full gap-3 p-3 items-center border border-gray-500 rounded-xl  backdrop-blur hover:bg-transparent hover:backdrop-blur"
              >
                <Image
                  src={avatar}
                  alt="avatar"
                  width={60}
                  className="h-[60px]"
                />
                <div>
                  <p>Xusanov Alibek</p>
                  <p>Developer</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 items-center text-center py-10 border w-full lg:w-[416px] border-gray-500 rounded-xl  backdrop-blur hover:bg-transparent hover:backdrop-blur">
          <h1 className="text-2xl">{t("free")}</h1>
          <p>
           {t("leave")}
          </p>

          <input
            type="text"
            placeholder="Ismingiz"
            className="border bg-gray-600 w-full max-w-[300px] p-4 rounded-2xl"
          />
          <input
            type="text"
            placeholder="Telefon raqamingiz"
            className="border bg-gray-600 w-full max-w-[300px] p-4 rounded-2xl"
          />
          <button className="border bg-[#5A00DB] w-full max-w-[300px] p-4 rounded-lg text-white">
            Jo’natish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
