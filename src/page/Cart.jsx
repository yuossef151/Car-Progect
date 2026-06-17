import { Link } from "react-router-dom";
import CartData from "../Components/CartComponents/CartData";
import Order from "../Components/CartComponents/Order";
import { useCart } from "../Components/CartProvider";
import { ShoppingBag } from "lucide-react";

export default function Cart() {
              const { cart } = useCart();
    
  return (
    <>
    {
        cart.length>0?(
                  <div className="bg-gray-50 p-10   grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div>
          <CartData />
        </div>

        <div>
          <Order />
        </div>
      </div>
        ):(
            <div className="bg-gray-50 p-10 flex flex-col items-center">
                <ShoppingBag className="h-24 w-24 mx-auto text-gray-300 mb-4" />
                <p className="text-2xl font-bold mb-2">سلة التسوق فارغة</p>
                <p className="pb-6 text-gray-600 mb-6">لم تقم بإضافة أي منتجات بعد</p>
                <Link to={"/shop"}  className="bg-blue-700 text-white py-2 px-5 rounded-lg shadow-lg" >تصفح المنتجات</Link>
            </div>
        )
    }

    </>
  );
}
