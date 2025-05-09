import Image from "next/image";
import React from "react";
import images from "@/assest/imegs/image.png";
import estangle from "@/assest/imegs/restangle.png";
import icon11 from "@/assest/imegs/Icon11.png";
import icon12 from "@/assest/imegs/Icon12.png";
import icon13 from "@/assest/imegs/Icon13.png";
import icon14 from "@/assest/imegs/Icon14.png";
import icon15 from "@/assest/imegs/Icon15.png";
import fon from "@/assest/imegs/fon.png";
import fon1 from "@/assest/imegs/fon.png";
import fon2 from "@/assest/imegs/fon.png";
import { useTranslations } from "next-intl";
const Cards = () => {
  const t = useTranslations();
  return (
    <div className="container mx-auto w-[90%] flex flex-col ga-5">
      <div className="flex flex-col md:flex-row border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className="p-8 flex flex-col gap-10 relative z-10 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{t("landingPage.title")}</h1>
          {/* i18n */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.targeted")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.targetedDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">
                  {t("landingPage.shortImpactful")}
                </h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.shortImpactfulDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.fastLoading")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.fastLoadingDescription")}</p> {/* i18n */}
            </div>
          </div>
          <div>
            <p>{t("landingPage.technicalTask")}</p> {/* i18n */}
            <p>{t("landingPage.numberOfPages")}</p> {/* i18n */}
            <p>{t("landingPage.webDesignTime")}</p> {/* i18n */}
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("landingPage.placeOrder")} {/* i18n */}
          </button>
          <Image
            src={icon11}
            alt="Icon"
            width={200}
            className="absolute bottom-0 right-1 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src={images}
            alt="Images"
            width={480}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute bottom-90 right-1/2 transform -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 transform -translate-x-1/2 z-0"
        />
      </div>
      <div className="flex flex-col md:flex-row border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className="p-8 flex flex-col gap-10 relative z-10 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{t("landingPage.title")}</h1>
          {/* i18n */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.targeted")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.targetedDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">
                  {t("landingPage.shortImpactful")}
                </h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.shortImpactfulDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.fastLoading")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.fastLoadingDescription")}</p> {/* i18n */}
            </div>
          </div>
          <div>
            <p>{t("landingPage.technicalTask")}</p> {/* i18n */}
            <p>{t("landingPage.numberOfPages")}</p> {/* i18n */}
            <p>{t("landingPage.webDesignTime")}</p> {/* i18n */}
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("landingPage.placeOrder")} {/* i18n */}
          </button>
          <Image
            src={icon12}
            alt="Icon"
            width={200}
            className="absolute bottom-0 right-1 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src={images}
            alt="Images"
            width={480}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute bottom-90 right-1/2 transform -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 transform -translate-x-1/2 z-0"
        />
      </div>
      <div className="flex flex-col md:flex-row border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className="p-8 flex flex-col gap-10 relative z-10 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{t("landingPage.title")}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.targeted")}</h1>{" "}
              </div>
              <p>{t("landingPage.targetedDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">
                  {t("landingPage.shortImpactful")}
                </h1>{" "}
              </div>
              <p>{t("landingPage.shortImpactfulDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.fastLoading")}</h1>{" "}
              </div>
              <p>{t("landingPage.fastLoadingDescription")}</p> {/* i18n */}
            </div>
          </div>
          <div>
            <p>{t("landingPage.technicalTask")}</p> {/* i18n */}
            <p>{t("landingPage.numberOfPages")}</p> {/* i18n */}
            <p>{t("landingPage.webDesignTime")}</p> {/* i18n */}
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("landingPage.placeOrder")} {/* i18n */}
          </button>
          <Image
            src={icon13}
            alt="Icon"
            width={200}
            className="absolute bottom-0 right-1 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src={images}
            alt="Images"
            width={480}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute bottom-90 right-1/2 transform -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 transform -translate-x-1/2 z-0"
        />
      </div>
      <div className="flex flex-col md:flex-row border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className="p-8 flex flex-col gap-10 relative z-10 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{t("landingPage.title")}</h1>
          {/* i18n */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.targeted")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.targetedDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">
                  {t("landingPage.shortImpactful")}
                </h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.shortImpactfulDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.fastLoading")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.fastLoadingDescription")}</p> {/* i18n */}
            </div>
          </div>
          <div>
            <p>{t("landingPage.technicalTask")}</p> {/* i18n */}
            <p>{t("landingPage.numberOfPages")}</p> {/* i18n */}
            <p>{t("landingPage.webDesignTime")}</p> {/* i18n */}
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("landingPage.placeOrder")} {/* i18n */}
          </button>
          <Image
            src={icon14}
            alt="Icon"
            width={200}
            className="absolute bottom-0 right-1 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src={images}
            alt="Images"
            width={480}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute bottom-90 right-1/2 transform -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 transform -translate-x-1/2 z-0"
        />
      </div>
      <div className="flex flex-col md:flex-row border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className="p-8 flex flex-col gap-10 relative z-10 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{t("landingPage.title")}</h1>
          {/* i18n */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.targeted")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.targetedDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">
                  {t("landingPage.shortImpactful")}
                </h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.shortImpactfulDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.fastLoading")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.fastLoadingDescription")}</p> {/* i18n */}
            </div>
          </div>
          <div>
            <p>{t("landingPage.technicalTask")}</p> {/* i18n */}
            <p>{t("landingPage.numberOfPages")}</p> {/* i18n */}
            <p>{t("landingPage.webDesignTime")}</p> {/* i18n */}
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("landingPage.placeOrder")} {/* i18n */}
          </button>
          <Image
            src={icon15}
            alt="Icon"
            width={200}
            className="absolute bottom-0 right-1 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src={images}
            alt="Images"
            width={480}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute bottom-90 right-1/2 transform -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 transform -translate-x-1/2 z-0"
        />
      </div>
      <div className="flex flex-col md:flex-row border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className="p-8 flex flex-col gap-10 relative z-10 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{t("landingPage.title")}</h1>
          {/* i18n */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.targeted")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.targetedDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">
                  {t("landingPage.shortImpactful")}
                </h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.shortImpactfulDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.fastLoading")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.fastLoadingDescription")}</p> {/* i18n */}
            </div>
          </div>
          <div>
            <p>{t("landingPage.technicalTask")}</p> {/* i18n */}
            <p>{t("landingPage.numberOfPages")}</p> {/* i18n */}
            <p>{t("landingPage.webDesignTime")}</p> {/* i18n */}
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("landingPage.placeOrder")} {/* i18n */}
          </button>
          <Image
            src={icon11}
            alt="Icon"
            width={200}
            className="absolute bottom-0 right-1 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src={images}
            alt="Images"
            width={480}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute bottom-90 right-1/2 transform -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 transform -translate-x-1/2 z-0"
        />
      </div>
      <div className="flex flex-col md:flex-row border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className="p-8 flex flex-col gap-10 relative z-10 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{t("landingPage.title")}</h1>
          {/* i18n */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.targeted")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.targetedDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">
                  {t("landingPage.shortImpactful")}
                </h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.shortImpactfulDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.fastLoading")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.fastLoadingDescription")}</p> {/* i18n */}
            </div>
          </div>
          <div>
            <p>{t("landingPage.technicalTask")}</p> {/* i18n */}
            <p>{t("landingPage.numberOfPages")}</p> {/* i18n */}
            <p>{t("landingPage.webDesignTime")}</p> {/* i18n */}
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("landingPage.placeOrder")} {/* i18n */}
          </button>
          <Image
            src={icon11}
            alt="Icon"
            width={200}
            className="absolute bottom-0 right-1 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src={images}
            alt="Images"
            width={480}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute bottom-90 right-1/2 transform -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 transform -translate-x-1/2 z-0"
        />
      </div>
      <div className="flex flex-col md:flex-row border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className="p-8 flex flex-col gap-10 relative z-10 w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">{t("landingPage.title")}</h1>
          {/* i18n */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.targeted")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.targetedDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">
                  {t("landingPage.shortImpactful")}
                </h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.shortImpactfulDescription")}</p> {/* i18n */}
            </div>
            <div className="w-full sm:w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Rectangle" height={25} width={25} />
                <h1 className="text-xl">{t("landingPage.fastLoading")}</h1>{" "}
                {/* i18n */}
              </div>
              <p>{t("landingPage.fastLoadingDescription")}</p> {/* i18n */}
            </div>
          </div>
          <div>
            <p>{t("landingPage.technicalTask")}</p> {/* i18n */}
            <p>{t("landingPage.numberOfPages")}</p> {/* i18n */}
            <p>{t("landingPage.webDesignTime")}</p> {/* i18n */}
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            {t("landingPage.placeOrder")} {/* i18n */}
          </button>
          <Image
            src={icon11}
            alt="Icon"
            width={200}
            className="absolute bottom-0 right-1 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <Image
            src={images}
            alt="Images"
            width={480}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute bottom-90 right-1/2 transform -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 transform -translate-x-1/2 z-0"
        />
      </div>
    </div>
  );
};

export default Cards;
