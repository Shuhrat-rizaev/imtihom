import Image from "next/image";
import React from "react";
import img from "@/assest/imegs/img.png";
import imges from "@/assest/imegs/imges.png";
import noventer from "@/assest/imegs/noventer.png";
import fon from "@/assest/imegs/fon.png";
import fon1 from "@/assest/imegs/fon.png";
import fon2 from "@/assest/imegs/fon.png";
import fon3 from "@/assest/imegs/fon.png";

const Loyihalar = () => {
  return (
    <div className="container w-[90%] mx-auto mt-26 relative">
      <div className="text-center flex flex-col gap-4 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Loyihalarimiz
        </h1>
        <p>biz haqimizda gapirsin !</p>
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
        <div className="w-full lg:w-[50%] flex flex-col gap-3 justify-end">
          <h1 className="text-xl md:text-2xl">Tourmad loyihasi</h1>
          <p>
            Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida
            ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z
            ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran
            xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar
            xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan
            tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va
            qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va
            o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
          </p>
          <button className="px-4 py-2 w-44 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Loyihani kurish
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
        <div className="w-full lg:w-[50%] flex flex-col gap-4 justify-end text-right">
          <h1 className="text-xl md:text-2xl">ProRun loyihasi</h1>
          <p>
            Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha
            musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda
            istalgan yoki har bir musobaqada qatnashishingiz mumkin.  Nima uchun
            sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois
            ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish
            uchun yangi web ilova ishlab chiqildi.
          </p>
          <button className="px-4 py-2 w-44 self-end text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Loyihani kurish
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
        <div className="w-full lg:w-[50%] flex flex-col gap-3 justify-end">
          <h1 className="text-xl md:text-2xl">Xalq trans loyihasi</h1>
          <p>
            Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s...
          </p>
          <button className="px-4 py-2 w-44 text-white text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Loyihani kurish
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
          Boshqa loyihalarni kurish
        </button>
      </div>
    </div>
  );
};

export default Loyihalar;
