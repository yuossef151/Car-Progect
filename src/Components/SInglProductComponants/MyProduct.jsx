import { useParams } from "react-router-dom";
import { cart as initialCart , products } from "../shopCombonents/data";
import { Info, Package, ShieldCheck, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../CartProvider";

export default function MyProduct() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
 const [cart, setCart] = useState(() => {
  const saved = localStorage.getItem("mycart");
  return saved ? JSON.parse(saved) : initialCart;
});

  const arry = [
    {
      name: "رقم القطعة",
      dic: product.partNumber,
    },
    {
      name: "رقم OEM",
      dic: product.oem,
    },
    {
      name: "النوع ",
      dic: "أصلي",
    },
    {
      name: "الماركة ",
      dic: "Original",
    },
  ];
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      label: "ضمان شامل",
    },
    { icon: <Package className="h-8 w-8 text-blue-600" />, label: "شحن سريع" },
    { icon: <Info className="h-8 w-8 text-blue-600" />, label: "دعم فني" },
  ];
  




  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:p-8 md:p-8 p-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              className="w-full h-full object-cover"
              src={`${import.meta.env.BASE_URL}img/${product.image}`}
              alt=""
            />
          </div>
          <div>
            <div className="border-b pb-5">
              <p className="text-[14px] text-gray-500 mb-1">
                {product.category}
              </p>
              <p className="text-[30px] font-bold">{product.name}</p>
            </div>
            <div className="border-b py-5">
              <p className="text-[30px] text-blue-700 font-bold mb-5">
                {product.price} EG
              </p>
              <span className="bg-green-100 py-1 px-2 text-green-700 rounded-lg text-[14px] ">
                متوفر في المخزون ({product.stock} قطعة)
              </span>
            </div>
            <div className="border-b py-5">
              <p className="text-[18px] font-bold mb-3">معلومات القطعة</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {arry.map((el, index) => {
                  return (
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-gray-600 mb-1">{el.name}</p>
                      <p className="font-bold">{el.dic}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex py-10 gap-2">
              <div>
                <p className="pb-2 text-[18px]">الكمية</p>
                <input
                  className="border p-2 rounded-lg"
                  type="number"
                  min={1}
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <div className="grow flex items-end">
                <button onClick={()=>{
                  console.log(product);
                  addToCart(product, quantity);
                  
                  
                }} className="text-white py-2 px-3 rounded-lg justify-center  bg-blue-600 flex w-full ">
                  
                  <ShoppingCart className="h-6 w-6" /> اضافة للسلة
                </button>
              </div>
            </div>

            <div className="flex lg:gap-10 md:gap-6 gap-2 justify-between">
              {features.map((el, index) => (
                <div
                  key={index}
                  className="flex flex-col grow items-center gap-2 bg-blue-50 p-6 rounded-xl"
                >
                  {el.icon}
                  <p className="text-sm font-medium text-gray-700">
                    {el.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
