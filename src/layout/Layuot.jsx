import { Outlet } from "react-router-dom";
import Footar from "../Components/Footar";
import Header from "../Components/Header";
import ScrollToTop from "../Components/ScrollToTop";



export default function Layuot() {

  return (
    <>
    <ScrollToTop />
      <Header />
        <Outlet />
      <Footar />
    </>
  )
}
