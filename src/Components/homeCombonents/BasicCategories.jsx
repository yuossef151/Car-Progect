import { Armchair, Car, Cog, Disc3, Settings2, Zap } from "lucide-react";

export default function BasicCategories() {
  const categories = [
    { name: "قطع المحرك", icon: <Cog className="h-10 w-10 text-blue-600" /> },
    {
      name: "نظام الفرامل",
      icon: <Disc3 className="h-10 w-10 text-red-500" />,
    },
    {
      name: "نظام التعليق",
      icon: <Settings2 className="h-10 w-10 text-orange-500" />,
    },
    {
      name: "الكهربائيات",
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
    },
    { name: "قطع الهيكل", icon: <Car className="h-10 w-10 text-gray-600" /> },
    {
      name: "الداخلية",
      icon: <Armchair className="h-10 w-10 text-green-600" />,
    },
  ];
  return (
    <>
      <div className="py-[60px] ">
        <div className="text-center">
          <p className="text-[30px] font-bold">الفئات الرئيسية</p>
          <p className="text-[16px] text-gray-600">تصفح حسب نوع القطعة</p>
        </div>
        <div className="lg:flex flex flex-wrap justify-around pt-10 px-10 gap-10">
          {categories.map((el, index) => {
            return (
              <div
                className="hover:shadow-lg  w-full       sm:w-[calc(50%-20px)] md:w-[calc(33.333%-27px)] lg:w-[calc(16.666%-34px)]   flex flex-col items-center p-6 rounded-lg  gap-5 border-2"
              >
                <p className=" flex justify-center">{el.icon}</p>
                <p className=" flex justify-center">{el.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
