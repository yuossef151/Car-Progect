import { Headphones, Shield, TrendingUp, Truck } from "lucide-react";

export default function TheBest() {
  const arry = [
    {
      title: "ضمان الجودة",
      disc: "قطع أصلية مع ضمان شامل",
      img: <Shield className="h-8 w-8 text-blue-600" />,
    },

    {
      title: "شحن سريع",
      disc: "توصيل لجميع أنحاء المملكة",
      img: <Truck className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "أسعار منافسة",
      disc: "أفضل الأسعار في السوق",
      img: <TrendingUp className="h-8 w-8 text-blue-600" />,
    },

    {
      title: "دعم فني",
      disc: "فريق دعم متاح على مدار الساعة",
      img: <Headphones className="h-8 w-8 text-blue-600" />,
    },
  ];
  return (
    <>
      <div className="lg:flex lg:flex-row md:flex-row flex flex-col gap-10 justify-around py-[60px] bg-gray-50">
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
    </>
  );
}
