
export default function Statistics() {
    const arry =[
        {
nume:"50,000+",
name:"قطعة غيار متوفرة",
        },
        {
nume:"15,000+",
name:"عميل راضٍ",
        },
        {
nume:"200+",
name:"ماركة سيارة",
        },
        {
nume:"99%",
name:"نسبة الرضا",
        },
    ]
  return (
    <>
      <div className="bg-gray-50 px-[56px]  py-[60px]">
<p className="text-3xl font-bold text-center mb-12">إحصائياتنا</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {
        arry.map((el,index)=>{
return <div className="p-8 rounded-lg shadow-lg text-center bg-white">
    <p className="text-blue-700  text-[48px] font-bold mb-2">{el.nume}</p>
    <p className="text-gray-600">{el.name}</p>
</div>
        })
    }
</div>
      </div>
    </>
  )
}
