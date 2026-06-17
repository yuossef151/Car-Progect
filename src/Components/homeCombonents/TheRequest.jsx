export default function TheRequest() {
  return (
    <>
      <div className="bg-blue-600 text-white flex flex-col items-center py-[60px]">
        <p className="text-[30px] pb-4 font-bold">لم تجد القطعة المطلوبة؟</p>
        <p className="pb-4">أرسل لنا طلب وسنبحث عنها لك</p>
        <button className="bg-blue-700 hover:bg-blue-900 shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] px-5 py-2 rounded-md" >
          طلب قطعة خاصة
        </button>
      </div>
      <div className="py-10 bg-white"></div>
    </>
  );
}
