import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Products({ products ,opn, setopn,buttonRef }) {
const [searchParams, setSearchParams] = useSearchParams();

const currentPage = Number(searchParams.get("page")) || 1;

  const [row, setrow] = useState(true);
  const navigate = useNavigate()
  const ITEMS_PER_PAGE = 9;

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const currentProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

useEffect(() => {
  console.log("currentPage =", currentPage);

  window.scrollTo(0, 0);
}, [currentPage]);
useEffect(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}, [currentPage]);

const changePage = (page) => {
  setSearchParams({ page });
};
  return (
    <div className=" lg:grow w-full">
      <div className="flex   lg:justify-end justify-between pb-10">
        <div
          onClick={() => {
            setopn((prav)=>!prav)
          }}
          className={`border lg:hidden px-8 py-1 rounded-md  ${opn ? "bg-blue-700 shadow-lg hover:bg-blue-900 " : " cursor-pointer hover:bg-[#cbcaff]"}`}
        >
          <SlidersHorizontal ref={buttonRef}
            className={`h-5 w-5 ${opn ? "text-white" : "text-blue-700"}`}
          />
        </div>
        <div className="flex gap-5 justify-end">
          <div
            onClick={() => {
              setrow(false);
            }}
            className={`border  px-8 py-1 rounded-md  ${row ? " cursor-pointer hover:bg-[#cbcaff]" : "bg-blue-700 shadow-lg  hover:bg-blue-900"}`}
          >
            <List
              className={`h-5 w-5 ${row ? "text-blue-700" : "text-white"}`}
            />
          </div>
          <div
            onClick={() => {
              setrow(true);
            }}
            className={`border  px-8 py-1 rounded-md  ${row ? "bg-blue-700 shadow-lg hover:bg-blue-900 " : " cursor-pointer hover:bg-[#cbcaff]"}`}
          >
            <LayoutGrid
              className={`h-5 w-5 ${row ? "text-white" : "text-blue-700"}`}
            />
          </div>
        </div>
      </div>
      <div
        className={`grid grid-cols-1   gap-5 ${row ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}
      >
        {currentProducts.map((el, index) => (
          <div onClick={()=>{
            console.log(el.id);
            navigate(`/Product/${el.id}`)
            
          }} key={index} className={`p-5 flex rounded-lg hover:shadow-lg bg-white  ${row ? "flex-col" : "flex-row gap-5"}`}>
        <div className={`aspect-square mb-2 overflow-hidden ${row?"":"w-48 flex-shrink-0 overflow-hidden"}`}>
<img 
  className="w-full h-full  transition-transform duration-200 hover:scale-110" 
  src={`/img/${el.image}`} 
  alt="" 
/>            
            </div>
<div className="flex flex-col justify-between grow">
              <div>
              <p className="text-[12px] text-gray-500 mb-1">{el.category}</p>
              <p className="text-[18px] font-bold mb-2">{el.name}</p>
              <p className="text-gray-600  text-[12px]">
                رقم القطعة: {el.partNumber}
              </p>
              <p className="text-gray-600  text-[12px] mb-2">OEM: {el.oem}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] font-bold text-blue-600">
                {el.price} EG
              </p>
              <p className="bg-green-100 py-1 px-2 text-green-700 rounded-lg text-[12px]">
                متوفر
              </p>
            </div>
</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <button
         onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50"
        >
          السابق
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`w-10 h-10 rounded-lg border font-bold transition-all
              ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-50"
        >
          التالي
        </button>
      </div>

      <p className="text-center text-gray-500 mt-3 text-sm">
        صفحة {currentPage} من {totalPages} — إجمالي {products.length} منتج
      </p>
    </div>
  );
}
