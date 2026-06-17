import { useRef, useState } from "react";
import { brands, models } from "../shopCombonents/data";
import { Upload } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Request() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    year: "2026",
    vin: "",
    description: "",
    partNumber: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const imageRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const years = Array.from({ length: 30 }, (_, i) => 2026 - i);

  const handleChange = (key, value) => {
    const updated = { ...form, [key]: value };
    if (key === "brand") updated.model = "";
    setForm(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_amhi15h",
        "template_nafgi07",
        {
          to_email: form.email,
          first_name: form.firstName,
          last_name: form.lastName,
          phone: form.phone,
          brand: form.brand,
          model: form.model,
          year: form.year,
          vin: form.vin,
          description: form.description,
          part_number: form.partNumber,
        },
        "9U2D_85Bqf6j6SVrx",
      );
      setSent(true);
      setImage(null);
      setPreview(null);
      imageRef.current.value = "";
    } catch (err) {
      console.log(err);

      alert("حدث خطأ، حاول مرة أخرى");
    }

    setLoading(false);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-right text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1 text-right";

  if (sent)
    return (
      <div
        className="flex flex-col items-center justify-center min-h-[400px] gap-4"
        dir="rtl"
      >
        <div className="text-green-500 text-6xl">✓</div>
        <h2 className="text-2xl font-bold text-gray-800">
          تم إرسال طلبك بنجاح!
        </h2>
        <p className="text-gray-500">
          سنتواصل معك على {form.email} في غضون 48 ساعة
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              brand: "",
              model: "",
              year: "2026",
              vin: "",
              description: "",
              partNumber: "",
            });
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          إرسال طلب جديد
        </button>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto lg:p-6 md:p-6 p-3" dir="rtl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">طلب قطعة خاصة</h1>
        <p className="text-gray-500 text-sm">
          لم تجد القطعة التي تبحث عنها؟ أرسل لنا تفاصيل القطعة وسنبحث عنها لك
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* معلومات التواصل */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            معلومات التواصل
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>الاسم الأول *</label>
              <input
                required
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className={inputClass}
                placeholder="الاسم الأول"
              />
            </div>
            <div>
              <label className={labelClass}>اسم العائلة *</label>
              <input
                required
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className={inputClass}
                placeholder="اسم العائلة"
              />
            </div>
            <div>
              <label className={labelClass}>رقم الهاتف *</label>
              <input
                required
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass}
                placeholder="رقم الهاتف"
                type="tel"
              />
            </div>
            <div>
              <label className={labelClass}>البريد الإلكتروني *</label>
              <input
                required
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
                placeholder="البريد الإلكتروني"
                type="email"
              />
            </div>
          </div>
        </div>

        {/* معلومات السيارة */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            معلومات السيارة
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>ماركة السيارة *</label>
              <select
                required
                value={form.brand}
                onChange={(e) => handleChange("brand", e.target.value)}
                className={inputClass}
              >
                <option value="">ماركة السيارة</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>موديل السيارة *</label>
              <select
                required
                value={form.model}
                onChange={(e) => handleChange("model", e.target.value)}
                disabled={!form.brand}
                className={`${inputClass} disabled:opacity-50`}
              >
                <option value="">موديل السيارة</option>
                {(models[form.brand] || []).map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>سنة الصنع</label>
              <select
                value={form.year}
                onChange={(e) => handleChange("year", e.target.value)}
                className={inputClass}
              >
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>رقم الهيكل (VIN) - اختياري</label>
              <input
                value={form.vin}
                onChange={(e) => handleChange("vin", e.target.value)}
                className={inputClass}
                placeholder="رقم الهيكل (VIN) - اختياري"
              />
            </div>
          </div>
        </div>

        {/* تفاصيل القطعة */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            تفاصيل القطعة المطلوبة
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className={labelClass}>وصف القطعة *</label>
              <textarea
                required
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className={`${inputClass} h-28 resize-none`}
                placeholder="وصف القطعة..."
              />
            </div>
            <div>
              <label className={labelClass}>رقم القطعة أو OEM - اختياري</label>
              <input
                value={form.partNumber}
                onChange={(e) => handleChange("partNumber", e.target.value)}
                className={inputClass}
                placeholder="رقم القطعة أو OEM - اختياري"
              />
            </div>
          </div>
        </div>

        {/* صورة القطعة */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            صورة القطعة - اختياري
          </h2>
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 cursor-pointer hover:bg-gray-50 transition">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="h-40 object-contain rounded-lg mb-2"
              />
            ) : (
              <>
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">اضغط لرفع صورة القطعة</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG, WebP</p>
              </>
            )}

            <input
              ref={imageRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </label>

          {preview && (
            <button
              type="button"
              onClick={() => {
                setImage(null);
                setPreview(null);
                imageRef.current.value = "";
              }}
              className="text-red-500 text-sm mt-2 hover:underline"
            >
              مسح الصورة
            </button>
          )}
        </div>

        {/* ملاحظات */}
        <div className="bg-blue-50 rounded-2xl p-4 text-right">
          <p className="font-bold text-gray-800 mb-2">ملاحظات مهمة</p>
          <ul className="text-sm text-gray-600 flex flex-col gap-1">
            <li>• سيتم التواصل معك خلال 24-48 ساعة</li>
            <li>• يمكنك إرفاق صورة واضحة للقطعة لتسهيل البحث</li>
            <li>• سنقوم بإرسال عرض السعر على بريدك الإلكتروني</li>
          </ul>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "جاري الإرسال..." : "إرسال الطلب"}
        </button>
      </form>
    </div>
  );
}
