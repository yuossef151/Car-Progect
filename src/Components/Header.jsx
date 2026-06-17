import { AlignJustify } from "lucide-react";
import Logo from "./headerComponents/Logo";
import Nav from "./headerComponents/Nav";
import { useRef, useState } from "react";
import useClickOutside from "../js/useClickOutside";
import IconCart from "./headerComponents/IconCart";

export default function Header() {
  const [opn,setopn] = useState(false);
    const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useClickOutside([menuRef, buttonRef], () => {
    setopn(false);
  });
  
  return (
    <>
      <div className=" sticky shadow-xl top-0 z-50 bg-white flex  lg:px-10 lg:py-4 md:p-5 p-4  items-center justify-between">
<Logo />
<Nav  opn={opn} setopn={setopn} menuRef={menuRef}/>
<IconCart  buttonRef={buttonRef} setopn={setopn} />

      </div>
    </>
  )
}
