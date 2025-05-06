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
const Cards = () => {
  return (
    <div className="container mx-auto w-[90%] flex flex-col ga-5">
      <div className=" flex  border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className=" p-8 flex flex-col gap-10 relative z-10">
          <h1 className="text-3xl font-semibold">Landing sahifalar</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Maqsadli</h1>
              </div>
              <p>
                Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
                undashga xizmat qiladi.
              </p>
            </div>{" "}
            <div className="w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Qisqa va ta'sirli</h1>
              </div>
              <p>
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
                undaydigan muhim ma'lumotlarni taqdim etadi.
              </p>
            </div>{" "}
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Tez yuklanuvchi</h1>
              </div>
              <p>
                Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
                tez yuklanadi.
              </p>
            </div>
          </div>

          <div>
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat
              boladi.)
            </p>
            <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Buyurtma berish
          </button>
          <Image
            src={icon11}
            alt="Icon"
            width={200}
            className="absolute bottom-[0px] right-1 transform -translate-x-1/2 "
          />
        </div>
        <div>
          <Image
            src={images}
            alt="Images"
            width={480}
            className=" rounded-lg"
          />
        </div>
      </div>{" "}
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
          className="absolute bottom-90 right-50 -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 -translate-x-1/2 z-0"
        />
      </div>
      <div className=" flex  border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className=" p-8 flex flex-col gap-10 relative z-10">
          <h1 className="text-3xl font-semibold">Landing sahifalar</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Maqsadli</h1>
              </div>
              <p>
                Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
                undashga xizmat qiladi.
              </p>
            </div>{" "}
            <div className="w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Qisqa va ta'sirli</h1>
              </div>
              <p>
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
                undaydigan muhim ma'lumotlarni taqdim etadi.
              </p>
            </div>{" "}
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Tez yuklanuvchi</h1>
              </div>
              <p>
                Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
                tez yuklanadi.
              </p>
            </div>
          </div>

          <div>
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat
              boladi.)
            </p>
            <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Buyurtma berish
          </button>
          <Image
            src={icon12}
            alt="Icon"
            width={200}
            className="absolute bottom-[0px] right-1 transform -translate-x-1/2 "
          />
        </div>
        <div>
          <Image
            src={images}
            alt="Images"
            width={480}
            className=" rounded-lg"
          />
        </div>
      </div>{" "}
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
          className="absolute bottom-90 right-50 -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 -translate-x-1/2 z-0"
        />
      </div>
      <div className=" flex  border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className=" p-8 flex flex-col gap-10 relative z-10">
          <h1 className="text-3xl font-semibold">Landing sahifalar</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Maqsadli</h1>
              </div>
              <p>
                Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
                undashga xizmat qiladi.
              </p>
            </div>{" "}
            <div className="w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Qisqa va ta'sirli</h1>
              </div>
              <p>
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
                undaydigan muhim ma'lumotlarni taqdim etadi.
              </p>
            </div>{" "}
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Tez yuklanuvchi</h1>
              </div>
              <p>
                Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
                tez yuklanadi.
              </p>
            </div>
          </div>

          <div>
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>
              Sayt sahifalar soni: 1 har bir sahifa minimum 5 ta qismdan iborat
              boladi.
            </p>
            <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Buyurtma berish
          </button>
          <Image
            src={icon13}
            alt="Icon"
            width={200}
            className="absolute bottom-[0px] right-1 transform -translate-x-1/2 "
          />
        </div>
        <div>
          <Image
            src={images}
            alt="Images"
            width={480}
            className=" rounded-lg"
          />
        </div>
      </div>{" "}
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
          className="absolute bottom-90 right-50 -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 -translate-x-1/2 z-0"
        />
      </div>
      <div className=" flex  border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className=" p-8 flex flex-col gap-10 relative z-10">
          <h1 className="text-3xl font-semibold">Landing sahifalar</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Maqsadli</h1>
              </div>
              <p>
                Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
                undashga xizmat qiladi.
              </p>
            </div>{" "}
            <div className="w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Qisqa va ta'sirli</h1>
              </div>
              <p>
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
                undaydigan muhim ma'lumotlarni taqdim etadi.
              </p>
            </div>{" "}
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Tez yuklanuvchi</h1>
              </div>
              <p>
                Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
                tez yuklanadi.
              </p>
            </div>
          </div>

          <div>
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat
              boladi.)
            </p>
            <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Buyurtma berish
          </button>
          <Image
            src={icon14}
            alt="Icon"
            width={200}
            className="absolute bottom-[0px] right-1 transform -translate-x-1/2 "
          />
        </div>
        <div>
          <Image
            src={images}
            alt="Images"
            width={480}
            className=" rounded-lg"
          />
        </div>
      </div>{" "}
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
          className="absolute bottom-90 right-50 -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 -translate-x-1/2 z-0"
        />
      </div>
      <div className=" flex  border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className=" p-8 flex flex-col gap-10 relative z-10">
          <h1 className="text-3xl font-semibold">Landing sahifalar</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Maqsadli</h1>
              </div>
              <p>
                Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
                undashga xizmat qiladi.
              </p>
            </div>{" "}
            <div className="w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Qisqa va ta'sirli</h1>
              </div>
              <p>
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
                undaydigan muhim ma'lumotlarni taqdim etadi.
              </p>
            </div>{" "}
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Tez yuklanuvchi</h1>
              </div>
              <p>
                Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
                tez yuklanadi.
              </p>
            </div>
          </div>

          <div>
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat
              boladi.)
            </p>
            <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Buyurtma berish
          </button>
          <Image
            src={icon15}
            alt="Icon"
            width={200}
            className="absolute bottom-[0px] right-1 transform -translate-x-1/2 "
          />
        </div>
        <div>
          <Image
            src={images}
            alt="Images"
            width={480}
            className=" rounded-lg"
          />
        </div>
      </div>{" "}
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
          className="absolute bottom-90 right-50 -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 -translate-x-1/2 z-0"
        />
      </div>
      <div className=" flex  border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className=" p-8 flex flex-col gap-10 relative z-10">
          <h1 className="text-3xl font-semibold">Landing sahifalar</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Maqsadli</h1>
              </div>
              <p>
                Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
                undashga xizmat qiladi.
              </p>
            </div>{" "}
            <div className="w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Qisqa va ta'sirli</h1>
              </div>
              <p>
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
                undaydigan muhim ma'lumotlarni taqdim etadi.
              </p>
            </div>{" "}
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Tez yuklanuvchi</h1>
              </div>
              <p>
                Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
                tez yuklanadi.
              </p>
            </div>
          </div>

          <div>
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat
              boladi.)
            </p>
            <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Buyurtma berish
          </button>
          <Image
            src={icon11}
            alt="Icon"
            width={200}
            className="absolute bottom-[0px] right-1 transform -translate-x-1/2 "
          />
        </div>
        <div>
          <Image
            src={images}
            alt="Images"
            width={480}
            className=" rounded-lg"
          />
        </div>
      </div>{" "}
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
          className="absolute bottom-90 right-50 -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 -translate-x-1/2 z-0"
        />
      </div>
      <div className=" flex  border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className=" p-8 flex flex-col gap-10 relative z-10">
          <h1 className="text-3xl font-semibold">Landing sahifalar</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Maqsadli</h1>
              </div>
              <p>
                Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
                undashga xizmat qiladi.
              </p>
            </div>{" "}
            <div className="w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Qisqa va ta'sirli</h1>
              </div>
              <p>
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
                undaydigan muhim ma'lumotlarni taqdim etadi.
              </p>
            </div>{" "}
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Tez yuklanuvchi</h1>
              </div>
              <p>
                Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
                tez yuklanadi.
              </p>
            </div>
          </div>

          <div>
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat
              boladi.)
            </p>
            <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Buyurtma berish
          </button>
          <Image
            src={icon11}
            alt="Icon"
            width={200}
            className="absolute bottom-[0px] right-1 transform -translate-x-1/2 "
          />
        </div>
        <div>
          <Image
            src={images}
            alt="Images"
            width={480}
            className=" rounded-lg"
          />
        </div>
      </div>{" "}
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
          className="absolute bottom-90 right-50 -translate-x-1/2 z-0"
        />
        <Image
          src={fon2}
          alt="fon2"
          width={300}
          className="absolute -bottom-25 -right-30 -translate-x-1/2 z-0"
        />
      </div>
      <div className=" flex  border border-gray-500 rounded-xl backdrop-blur-md hover:bg-transparent hover:backdrop-blur relative z-10">
        <div className=" p-8 flex flex-col gap-10 relative z-10">
          <h1 className="text-3xl font-semibold">Landing sahifalar</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Maqsadli</h1>
              </div>
              <p>
                Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
                undashga xizmat qiladi.
              </p>
            </div>{" "}
            <div className="w-[350px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Qisqa va ta'sirli</h1>
              </div>
              <p>
                Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
                undaydigan muhim ma'lumotlarni taqdim etadi.
              </p>
            </div>{" "}
            <div className="w-[283px]">
              <div className="flex gap-1">
                <Image src={estangle} alt="Restangle" height={25} width={25} />
                <h1 className="text-xl">Tez yuklanuvchi</h1>
              </div>
              <p>
                Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
                tez yuklanadi.
              </p>
            </div>
          </div>

          <div>
            <p>Texnik vazifa tayyorlab berish: 1 kun</p>
            <p>
              Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan iborat
              boladi.)
            </p>
            <p>Veb Dizayn: 10-15 soatlik mehnat.</p>
          </div>
          <button className="px-4 py-2 w-[205px] text-white text-sm sm:text-lg font-semibold border border-gray-500 rounded-xl bg-transparent hover:bg-gray-800 transition-all shadow-md">
            Buyurtma berish
          </button>
          <Image
            src={icon11}
            alt="Icon"
            width={200}
            className="absolute bottom-[0px] right-1 transform -translate-x-1/2 "
          />
        </div>
        <div>
          <Image
            src={images}
            alt="Images"
            width={480}
            className=" rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
