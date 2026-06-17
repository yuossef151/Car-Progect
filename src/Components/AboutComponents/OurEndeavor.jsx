export default function OurEndeavor() {
  const arry = [
    {
      title: "رؤيتنا",
      disc: "أن نكون المنصة الرائدة في جمهورية مصر العربية  لتوفير قطع غيار السيارات، ونقطة الانطلاق الأولى لكل من يبحث عن الجودة والموثوقية والسعر المناسب.",
    },
    {
      title: "رسالتنا",
      disc: "نسعى لتسهيل عملية الحصول على قطع الغيار المناسبة من خلال منصة إلكترونية متطورة، مع ضمان الجودة العالية، الأسعار المنافسة، والخدمة المتميزة.",
    },
  ];
  return (
    <>
      <div className="px-[56px]   py-[60px]">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl font-bold text-center mb-8">رؤيتنا ورسالتنا</p>
          <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-cols-2 gap-8">
            {arry.map((el, index) => {
              return (
                <div
                  key={index}
                  className="bg-blue-50 rounded-lg p-8 text-right"
                >
                  <p className="text-2xl font-bold mb-4 text-blue-600">
                    {el.title}
                  </p>
                  <p className="text-gray-700  leading-relaxed">{el.disc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
