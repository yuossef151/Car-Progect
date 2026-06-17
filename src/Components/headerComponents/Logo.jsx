export default function Logo() {
  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-wrench h-8 w-8 text-blue-600"
          data-fg-d5jy14="3.58:3.3913:/src/app/components/Header.tsx:28:13:1098:44:e:Wrench::::::dbj"
          data-fgid-d5jy14=":rh:"
          data--h-bstatus="0OBSERVED"
        >
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            data--h-bstatus="0OBSERVED"
          ></path>
        </svg>
        <div>
          <p className="lg:text-2xl text-[20px] text-blue-600 font-bold">قطع غيار السيارات</p>
          <p className="lg:text-[16px] text-[14px] text-gray-600">جودة عالية - أسعار منافسة</p>
        </div>
      </div>
    </>
  );
}
