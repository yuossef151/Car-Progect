import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../CartProvider";

export default function CartData() {
  const { cart ,updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <div className="flex flex-col gap-4 grow">
        {cart?.map((el, index) => {
          return (
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="w-24 h-24 object-cover rounded" src={`${import.meta.env.BASE_URL}img/${el.image}`} alt="" />
              </div>
              <div>
                <p className="font-bold hover:text-blue-600 transition">{el.name}</p>
                <p className="text-sm text-gray-600 mt-1">{el.category}</p>
                <p className="text-sm text-gray-600 mt-1"> رقم القطعة: {el.partNumber} </p>
                <div className="flex gap-3 items-center mt-2">
<div  className="flex items-center gap-2 border rounded">
<button onClick={()=>{
        updateQuantity(el.id, -1)
    }}  className="cursor-pointer m-1 p-1 hover:bg-slate-200 hover:rounded-[50%]">
        <Minus className="h-4 w-4 " />
</button>
    <p>{el.qt}</p>
<button onClick={()=>{
        updateQuantity(el.id, 1)
    }} className="cursor-pointer m-1 p-1 hover:bg-slate-200 hover:rounded-[50%]">
        <Plus  className="h-4 w-4 " />
</button>

</div>
<p className="text-xl font-bold text-blue-600">{el.price * el.qt} EG</p>
<button onClick={()=>{
    removeFromCart(el.id)
}} className="hover:bg-red-100 p-1 rounded-[50%]">
    <Trash2 className="h-5 w-5 text-red-500" />

</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
