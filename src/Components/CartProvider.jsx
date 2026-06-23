import { createContext, useContext, useState } from "react";
import { cart as initialCart } from "./shopCombonents/data";
import Swal from "sweetalert2";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("mycart")) || initialCart
  );

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      let newCart;

      if (exists) {
        newCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qt: item.qt + quantity }
            : item
        );
      } else {
        newCart = [...prevCart, { ...product, qt: quantity }];
      }

      localStorage.setItem("mycart", JSON.stringify(newCart));
      return newCart;
    });

    Swal.fire({
  title: 'تمت الإضافة! 🛒',
  text: 'تمت اضافة المنتج بنجاح',
  icon: 'success',
  toast: true,
  position: 'top-end',
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
  background: '#1a2540',     // نفس الـ dark navy بتاع الفوتر
  color: '#ffffff',
  iconColor: '#3b82f6',      // أزرق زي أزرار موقعك
  customClass: {
    popup: 'rtl-toast'
  }
});
  };

const updateQuantity = (id, amount) => {
  setCart((prevCart) => {
    const newCart = prevCart.map((item) =>
      item.id === id
        ? { ...item, qt: Math.min(item.stock, Math.max(1, item.qt + amount)) }
        : item
    );
    localStorage.setItem("mycart", JSON.stringify(newCart));
    return newCart;
  });
};

const removeFromCart = (id) => {
  setCart((prevCart) => {
    const newCart = prevCart.filter((item) => item.id !== id);
    localStorage.setItem("mycart", JSON.stringify(newCart));
    return newCart;
  });

      Swal.fire({
      title: '',
      text:   'تمت ازالة المنتج من السلة ',
      icon: 'success',
      toast: true,
      position: 'top-end',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      background: '#1a2540',
      color: '#ffffff',
      iconColor: '#ef4444',
    });
  }



const clearCart = () => {
  setCart([]);
  localStorage.setItem("mycart", JSON.stringify([]));
};
  return (
    <CartContext.Provider value={{ cart , addToCart , updateQuantity , removeFromCart , clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}