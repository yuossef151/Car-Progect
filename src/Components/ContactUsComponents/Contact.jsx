import { Award, Mail, Map, MapPin, Phone, Target, Users } from "lucide-react";
import React from "react";

export default function Contact() {
  const arry = [
    {
      title: "اتصل بنا",
      disc: "نحن متاحون من السبت إلى الخميس",
      name_1: "01554321319",
      name_2: "01034587832",
      img: <Phone className="h-8 w-8 text-blue-600" />,
    },

    {
      title: " راسلنا",
      disc: "سنرد عليك خلال 24 ساعة",
      name_1: "yuossefgaafar@gmail.com",
      name_2: "yuossefgaafar07@gmail.com",
      img: <Mail className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "زرنا",
      disc: "مقرنا الرئيسي",
      name_1: "القاهره",
      name_2: "جمهوية مصر العربية",
      img: <MapPin className="h-8 w-8 text-blue-600" />,
    },
  ];
  return (
    <>
      <div className=" text-center lg:px-[56px] md:px-[30px] px-[70px]  py-[60px] bg-gray-50">
        <p className="text-[30px] mb-5  font-bold">اتصل بنا </p>
        <p className="text-[18px] mb-[48px] text-gray-600">
          نحن هنا للإجابة على جميع استفساراتك
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-32 md:gap-5 gap-10">
          {arry.map((el, index) => {
            return (
              <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg">
                <div className="rounded-[50%] bg-blue-100 p-5">{el.img}</div>
                <div className="flex flex-col text-center pt-[16px]">
                  <p className="text-[18px] font-medium pb-2">{el.title}</p>
                  <p className="text-[16px] text-gray-600 mb-2">{el.disc}</p>
                  <p className={`  text-[16px] ${index==2?"text-black ":"text-blue-700 "}`}>{el.name_1}</p>
                  <p className={`text-[16px]  ${index==2?"text-gray-600":"text-blue-700"}`}>{el.name_2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
