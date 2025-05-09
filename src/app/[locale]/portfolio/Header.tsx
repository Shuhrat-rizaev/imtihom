import Image from "next/image";
import React from "react";
import group from "@/assest/imegs/group1.png";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();
  return (
    <div className="mt-15">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left -mt-30">
            <h1 className="text-3xl md:text-5xl w-full md:w-[500px] h-[232] ml-4 md:ml-26">
              <p className="py-2 font-Inter font-bold">
                {t("header.experience")}
              </p>{" "}
              {/* i18n */}
              <p>{t("header.variousSizes")}</p> {/* i18n */}
              <p className="py-2 font-Inter font-bold text-[#5A00DB]">
                {t("header.itProjects")}
              </p>{" "}
              {/* i18n */}
              <p className="py- w-2xl font-Inter font-bold">
                {t("header.launchedProjects")}
              </p>{" "}
              {/* i18n */}
            </h1>
          </div>
          <div className="relative w-full max-w-[900px] mt-8 md:mt-0">
            <Image src={group} alt="Laptop" width={900} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
