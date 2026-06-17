import { Link } from 'react-router-dom'

export default function OurClients() {
  return (
    <>
      <div className="bg-blue-600 text-white flex flex-col items-center py-[60px] text-center px-5">
        <p className="text-[30px] pb-4 font-bold">انضم إلى عائلة عملائنا</p>
        <p className="pb-4">ابدأ تجربة تسوق ممتعة وسهلة للحصول على قطع الغيار التي تحتاجها</p>
<div className="flex gap-10 pt-5">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition" >
<Link to={"/Shop"}>تصفح المتجر</Link>
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition" >
<Link to={"/Shop"}> تواصل معنا</Link>
        </button>
</div>
      </div>
      <div className="py-10 bg-white"></div>
    </>
  )
}
