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

const Service = () => {
  return (
    <div className="continer w-[90%] mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md duration-500 flex flex-col items-center text-center gap-3">
          <Image src={icon} alt="Icon" width={150} />
          <h1 className="text-2xl">Loading safifalar</h1>
          <p className="">
            Qisqa tasirli va maqsadli sahifalar, mijozlarni alohida harakatga
            undash uchun mo'ljallangan.
          </p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md duration-500 flex flex-col items-center text-center gap-3">
          <Image src={icon1} alt="Icon" width={150} />
          <h1 className="text-2xl">Korporativ veb-sayt</h1>
          <p className="">
            Kompaniyaning umumiy malumotini taqdim etish, xizmatlar yoki
            mahsulotlar haqida malumot berish.
          </p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md duration-500 flex flex-col items-center text-center gap-3">
          <Image src={icon2} alt="Icon2" width={150} />
          <h1 className="text-2xl">Online dokon</h1>
          <p className="">
            Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. Tolov tizimlari
            va mahsulotni boshqarish tizimi mavjud.
          </p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon3} alt="Icon3" width={150} />
          <h1 className="text-2xl">CRM tizimi</h1>
          <p className="">
            Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta
            kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.
          </p>
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
          <h1 className="text-2xl">Blog sahifalari</h1>
          <p className="">
            Oz fikrlari, yangiliklari yoki ma'lumotlarini ortoqlashish.
            Ma'lumot yetkazish, auditoriyani jalb qilish va reklama qilish
            uchun.
          </p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon6} alt="Icon6" width={150} />
          <h1 className="text-2xl">Talim platformasi</h1>
          <p className="">
            Ta'lim kurslari, videodarsliklar, yoki online testlar uchun. Oquv
            muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.
          </p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon7} alt="Icon7" width={150} />
          <h1 className="text-2xl">ERP platformasi</h1>
          <p className="">
            ERP platformasi korxona yoki tashkilotning barcha jarayonlarini
            birlashtiruvchi kompleks dasturiy ta'minotdir.
          </p>
        </div>
        <div className="px-8 py-5 w-full sm:w-[350px] text-white font-semibold border border-gray-500 rounded-xl bg-white/2 backdrop-blur hover:bg-[#5A00DB] shadow-md flex duration-500  flex-col items-center text-center gap-3">
          <Image src={icon8} alt="Icon8" width={150} />
          <h1 className="text-2xl">Alohida loyihami ?</h1>
          <p className="">
            Biz yangi startap loyihalarni ham rivojlantirishda yordam beramiz.
            Agarda sizda yangi startap goya mavjud bolsa biz siz bilan uni
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
