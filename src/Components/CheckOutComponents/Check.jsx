import { useState } from "react";
import { useCart } from "../CartProvider";
import { MapPin, Truck } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Check() {
const { cart, clearCart } = useCart();
  const [shipping, setShipping] = useState(50);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    phone: "",
    fullName: "",
    email: "",
    city: "",
    address: "",
  });

  const subtotal = cart.reduce((sum, item) => sum + item.qt * item.price, 0);
  const vat = Math.round((subtotal + shipping) * 0.15 * 100) / 100;
  const total = subtotal + shipping + vat;
  const shippingLabel = shipping === 50 ? "شحن عادي (3-5 أيام)" : "شحن سريع (1-2 يوم)";

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleConfirmOrder = async () => {
    if (!form.phone || !form.fullName || !form.email || !form.city || !form.address) {
      alert("من فضلك أكمل جميع الحقول المطلوبة");
      return;
    }

    setLoading(true);

    const orderItems = cart
      .map((item) => `${item.name} × ${item.qt} = ${(item.qt * item.price).toFixed(2)} EG`)
      .join("\n");

    try {
      await emailjs.send(
        "service_vbfy2ss",
        "template_v5bdsc6",
        {
          to_email: form.email,
          full_name: form.fullName,
          phone: form.phone,
          city: form.city,
          address: form.address,
          shipping_method: shippingLabel,
          order_items: orderItems,
          subtotal: subtotal.toFixed(2),
          shipping_cost: shipping.toFixed(2),
          vat: vat.toFixed(2),
          total: total.toFixed(2),
        },
        "S9AQiE9VdkOUd4yhD"
      );
      setSent(true);
      clearCart();
    } catch (err) {
        console.log(err);
      alert("حدث خطأ، حاول مرة أخرى");
    }

    setLoading(false);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-right text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

  if (sent)
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4" dir="rtl">
        <div className="text-green-500 text-6xl">✓</div>
        <h2 className="text-2xl font-bold text-gray-800">تم تأكيد طلبك بنجاح!</h2>
        <p className="text-gray-500">سنرسل تفاصيل الطلب على {form.email}</p>
      </div>
    );

  return (
    <div className=" lg:p-20 md:p-10 p-5" dir="rtl">
      <h1 className="text-3xl font-bold mb-6">إتمام الطلب</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <div className="bg-white rounded-2xl shadow-sm border p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" /> معلومات الشحن
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-3">
                <input
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className={inputClass}
                  placeholder="الاسم الكامل *"
                />
              <input
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass}
                placeholder="رقم الجوال *"
              />
            </div>
            <input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`${inputClass} mb-3`}
              placeholder="البريد الإلكتروني *"
              type="email"
            />
            <select
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className={`${inputClass} mb-3`}
            >
              <option value="">المدينة *</option>
              <option value="القاهرة">القاهرة</option>
              <option value="الإسكندرية">الإسكندرية</option>
              <option value="الجيزة">الجيزة</option>
              <option value="المنصورة">المنصورة</option>
            </select>
            <textarea
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className={`${inputClass} h-20 resize-none`}
              placeholder="العنوان بالتفصيل *"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-5">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-600" /> طريقة الشحن
            </h2>

            <label
              className={`flex items-center justify-between border rounded-lg p-3 mb-3 cursor-pointer ${shipping === 50 ? "border-blue-500" : "border-gray-200"}`}
            >
              <input
                type="radio"
                name="shipping"
                checked={shipping === 50}
                onChange={() => setShipping(50)}
              />
              <div className="text-right flex-1 mr-3">
                <p className="font-bold">
                  شحن عادي <span className="text-blue-600">50 EG</span>
                </p>
                <p className="text-xs text-gray-500">من 3-5 أيام عمل</p>
              </div>
            </label>

            <label
              className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${shipping === 80 ? "border-blue-500" : "border-gray-200"}`}
            >
              <input
                type="radio"
                name="shipping"
                checked={shipping === 80}
                onChange={() => setShipping(80)}
              />
              <div className="text-right flex-1 mr-3">
                <p className="font-bold">
                  شحن سريع <span className="text-blue-600">80 EG</span>
                </p>
                <p className="text-xs text-gray-500">من 1-2 يوم عمل</p>
              </div>
            </label>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border p-5 h-fit order-1 lg:order-2">
          <h2 className="text-lg font-bold mb-4">ملخص الطلب</h2>

          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm py-2 border-b">
              <span className="font-medium">{(item.qt * item.price).toFixed(2)} EG</span>
              <span className="text-gray-500">{item.name} × {item.qt}</span>
            </div>
          ))}

          <div className="flex justify-between text-sm py-2">
            <span>{subtotal.toFixed(2)} EG</span>
            <span className="text-gray-500">المجموع الفرعي</span>
          </div>
          <div className="flex justify-between text-sm py-2">
            <span>{shipping.toFixed(2)} EG</span>
            <span className="text-gray-500">الشحن</span>
          </div>
          <div className="flex justify-between text-sm py-2 border-b">
            <span>{vat.toFixed(2)} EG</span>
            <span className="text-gray-500">ضريبة القيمة المضافة (15%)</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-lg font-bold text-blue-600">{total.toFixed(2)} EG</span>
            <span className="font-bold">الإجمالي</span>
          </div>

          <button
            onClick={handleConfirmOrder}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "جاري الإرسال..." : "تأكيد الطلب"}
          </button>
          <p className="text-xs text-gray-400 text-center mt-2">
            بالضغط على "تأكيد الطلب" فإنك توافق على الشروط والأحكام
          </p>
        </div>
      </div>
    </div>
  );
}