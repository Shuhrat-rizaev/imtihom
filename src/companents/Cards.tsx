import React from "react";
import qollar from "@/assest/imegs/qo`llar.png";
import ishstoli from "@/assest/imegs/ishStoli.png";
import jamoa from "@/assest/imegs/jamoa.png";
import Image from "next/image";
import fon from "@/assest/imegs/fon.png";
import fon1 from "@/assest/imegs/fon.png";
import fon2 from "@/assest/imegs/fon.png";

const Cards = () => {
  return (
    <div className="container mx-auto w-[90%] relative px-4">
      <div className="mt-20 flex flex-col lg:flex-row gap-10 items-center">
        <div className="shadow-lg max-w-sm w-full border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
          <div>
            <Image
              src={qollar}
              alt="Qo`llar"
              width={400}
              className="rounded-lg w-full h-auto"
            />
            <h3 className="text-lg font-bold px-4 pt-4">Boshlanishi</h3>
            <p className="text-sm py-5 px-4">
              Biz --- dan ish boshladik va --- larni oldimizga maqsad qilib
              qo’ydik
            </p>
          </div>
        </div>

        <div className="shadow-lg max-w-sm w-full border border-gray-500 rounded-xl  backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
          <div>
            <Image
              src={ishstoli}
              alt="Ish stoli"
              width={400}
              className="rounded-lg w-full h-auto"
            />
            <h3 className="text-lg font-bold px-4 pt-4">
              Uzoq muddatli loyihalar
            </h3>
            <p className="text-sm py-5 px-4">
              Tajribamiz davomida umumiy hisobda - - loyiha uchun -- - muddatda
              ishlab topshirdik
            </p>
          </div>
        </div>

        <div className="shadow-lg max-w-sm w-full border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
          <div>
            <Image
              src={jamoa}
              alt="Jamoa"
              width={400}
              className="rounded-lg w-full h-auto"
            />
            <h3 className="text-lg font-bold px-4 pt-4">
              Jamoamiz kengaymoqda
            </h3>
            <p className="text-sm py-5 px-4">
              Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan
              boshlangan faoliyatimiz hozirda --
            </p>
          </div>
        </div>
      </div>

      {/* Fon rasmlari */}
      <div className="relative mt-10">
        <Image
          src={fon}
          alt="fon"
          width={300}
          className="absolute -bottom-10 left-10 -translate-x-1/2 z-0"
        />
        <Image
          src={fon1}
          alt="fon1"
          width={300}
          className="absolute -bottom-12 right-4 -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute bottom-20 right-10 -translate-x-1/2 z-0"
        />
      </div>

      <p className="mt-24 text-justify">
        Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
  );
};

export default Cards;
