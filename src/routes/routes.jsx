import { createHashRouter } from "react-router-dom";
import Layuot from "../layout/Layuot";
import Home from "../page/Home";
import Shop from "../page/Shop";
import SInglProduct from "../page/SInglProduct";
import SpecialRequest from "../page/SpecialRequest";
import About from "../page/About";
import ContactUs from "../page/ContactUs";
import Cart from "../page/Cart";
import CheckOut from "../page/CheckOut";


console.log("ROUTES FILE LOADED");


const router = createHashRouter([
  
  {
    path: "/",
    element: <Layuot />,
    children: [
        { index: true, element: <Home /> },
        { path: "Shop", element: <Shop /> },
        { path: "Product/:id", element: <SInglProduct /> },
        { path: "request-part", element: <SpecialRequest /> },
        { path: "about", element: <About /> },
        { path: "Contact-us", element: <ContactUs /> },
        { path: "cart", element: <Cart /> },
        { path: "Check-out", element: <CheckOut /> },
    ],
  },
]);

export default router 
