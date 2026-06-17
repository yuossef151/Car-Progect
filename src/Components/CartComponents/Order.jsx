import { Link } from "react-router-dom";
import { useCart } from "../CartProvider";

    export default function Order() {
          const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.qt * item.price, 0);
    return (
        <>
        <div className="rounded-lg shadow-lg bg-white lg:p-10 md:p-6 p-4">
<p className="mb-4 text-xl font-bold">ملخص الطلب</p>
<div className="flex justify-between">
    <p className="text-gray-600">المجموع الفرعي</p>
    <p>{total} EG</p>
</div>
<div className="flex justify-between my-3">
    <p className="text-gray-600">الشحن</p>
    <p className="text-green-600">مجاني</p>
</div>
<div className="flex justify-between mb-3">
    <p className="text-gray-600">ضريبة القيمة المضافة (15%)</p>
    <p>{total*(15)/100} EG</p>
</div>
<div className="flex justify-between py-3 border-t">
    <p className="font-bold">الإجمالي</p>
    <p className="font-bold text-blue-600">{total+(total*(15)/100)} EG</p>
</div>
<div className="flex flex-col text-center">
    <Link className="mb-4 bg-blue-700 shadow-lg rounded-lg  py-2 text-white" to={"/Check-out"}>اتمام الطلب</Link>
    <Link className="text-blue-700" to={"/shop"}>متابعة التسوق</Link>
</div>

        </div>
        </>
    )
    }
