import {   Award, Target, TrendingUp, Users  } from "lucide-react";

export default function WhyUs() {
  const arry = [
    {
      title: "جودة مضمونة",
      disc: "جميع قطعنا أصلية أو معتمدة من OEM مع ضمان شامل على كل منتج",
      img: <Target  className="h-8 w-8 text-blue-600" />,
    },

    {
      title:"خبرة واسعة",
      disc: "فريقنا لديه خبرة تزيد عن 15 عاماً في مجال قطع غيار السيارات",
      img: <Users  className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "خدمة متميزة",
      disc: "دعم فني على مدار الساعة وشحن سريع لجميع أنحاء المملكة",
      img: <Award className="h-8 w-8 text-blue-600" />,
    },

    {
      title: "أسعار تنافسية",
      disc: "نقدم أفضل الأسعار في السوق دون المساومة على الجودة",
      img: <TrendingUp className="h-8 w-8 text-blue-600" />,
    },
  ];
  return (
    <>
      <div className=" text-center px-[56px]   py-[60px] bg-white">
        <p className="text-[30px] mb-[48px] font-bold">لماذا نحن؟</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
        {arry.map((el, index) => {
          return (
            <div className="flex flex-col items-center">
              <div className="rounded-[50%] bg-blue-100 p-5">{el.img}</div>
              <div className="flex flex-col text-center pt-[16px]">
                <p className="text-[18px] font-medium pb-2">{el.title}</p>
                <p className="text-[14px] text-gray-600">{el.disc}</p>
              </div>
            </div>
          );
        })}
      </div>
        </div>

    </>
  );
}
