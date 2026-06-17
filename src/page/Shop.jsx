import React, { useEffect, useRef, useState } from "react";
import Search from "../Components/shopCombonents/Search";
import Products from "../Components/shopCombonents/Products";
import Filter from "../Components/shopCombonents/Filter";
import { products } from "../Components/shopCombonents/data"; 
import useClickOutside from "../js/useClickOutside";

export default function Shop() {
  const [filtered, setFiltered] = useState(products);
   const [opn, setopn] = useState(false);

       const menuRef = useRef(null);
     const buttonRef = useRef(null);
   
     useClickOutside([menuRef, buttonRef], () => {
       setopn(false);
         document.body.style.overflow = 'auto'
     });
useEffect(() => {
  const isLg = window.innerWidth >= 1024

  if (opn && !isLg) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  // لما تمشي من الصفحة رجّع الـ scroll
  return () => {
    document.body.style.overflow = 'auto'
  }
}, [opn])
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setopn(false)
      document.body.style.overflow = 'auto'
    }
  }

  window.addEventListener('resize', handleResize)
  
  return () => window.removeEventListener('resize', handleResize)
}, [])

  const handleFilter = (filters) => {
    let result = [...products];
    if (filters.brand) result = result.filter((p) => p.brand === filters.brand);
    if (filters.model) result = result.filter((p) => p.model === filters.model);
    if (filters.category)
      result = result.filter((p) => p.category === filters.category);
    if (filters.priceMin)
      result = result.filter((p) => p.price >= Number(filters.priceMin));
    if (filters.priceMax)
      result = result.filter((p) => p.price <= Number(filters.priceMax));
    setFiltered(result);
  };
  return (
    <>
      <div className="bg-gray-50">
        <Search />
        <div className="flex lg:px-10 px-5 pb-10 gap-5">
          <Filter opn={opn} setopn={setopn} menuRef={menuRef}
            onFilter={handleFilter}
            onReset={() => setFiltered(products)}
          />
          <Products opn={opn} setopn={setopn} products={filtered} buttonRef={buttonRef}/>
        </div>
      </div>
    </>
  );
}
