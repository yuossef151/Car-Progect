import FootarLogo from "./footarCombonents/FootarLogo";
import FootarNav from "./footarCombonents/FootarNav";

export default function Footar() {
  return (
    <>
      <div className="bg-[#101828] p-10 ">
        <div className=" lg:flex lg:flex-row flex flex-col gap-20 ">
          <FootarLogo />
          <FootarNav />
        </div>
        <div className="text-center text-[#b1b0b0] mt-10 pt-4 border-t border-[#3c424e]">
                  <p>© 2026 قطع غيار السيارات. جميع الحقوق محفوظة.</p>

        </div>
      </div>
    </>
  );
}
