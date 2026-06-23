import { AlignJustify, ShoppingCart } from "lucide-react";
import { useCart } from "../CartProvider";
import { Link } from "react-router-dom";

export default function IconCart({buttonRef,setopn}) {
  const { cart } = useCart();

  return (
    <>

      <div className="flex gap-5 ">
<Link to={"cart"}>
              <div className="flex relative items-center gap-1">
<ShoppingCart className="text-blue-600 h-6 w-6" />   
     <p className="text-blue-600">السلة</p>
     <p className={`absolute left-12 bottom-4 px-2 text-[16px]  rounded-[50%] bg-red-600 text-white ${cart.length>0?"block":"hidden"}`}>{cart.length}</p>
      </div>
      </Link>
        <AlignJustify 
ref={buttonRef}
 onClick={()=>{
  setopn((prev)=>!prev);
  
}} className="lg:hidden h-6 w-6" />


      </div>
    </>
  )
}
