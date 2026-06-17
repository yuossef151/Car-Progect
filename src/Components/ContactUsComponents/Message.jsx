import { useState } from "react"
import emailjs from '@emailjs/browser'
import { Send } from 'lucide-react'
export default function Message() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
  'service_vbfy2ss',
  'template_kfwf60p',
        {
          first_name: form.fullName,
          phone: form.phone,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
         'S9AQiE9VdkOUd4yhD',
      );
      setSent(true);
      setForm({ fullName: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("حدث خطأ، حاول مرة أخرى");
    }

    setLoading(false);
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-right text-sm focus:outline-none focus:ring-2 focus:ring-blue-400";

  return (
    <>
      <div className="bg-gray-50 py-10">

            <div className="max-w-2xl mx-auto p-6 " dir="rtl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-right">أرسل لنا رسالة</h2>

      {sent && (
        <div className="bg-green-50 border border-green-300 text-green-700 rounded-lg p-4 mb-6 text-right">
          ✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4  bg-white p-10 rounded-lg shadow-lg">

        <input
          required
          value={form.fullName}
          onChange={e => handleChange('fullName', e.target.value)}
          className={inputClass}
          placeholder="الاسم الكامل *"
        />

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <input
            value={form.phone}
            onChange={e => handleChange('phone', e.target.value)}
            className={inputClass}
            placeholder="رقم الجوال"
            type="tel"
          />
          <input
            required
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
            className={inputClass}
            placeholder="البريد الإلكتروني *"
            type="email"
          />
        </div>

        <input
          value={form.subject}
          onChange={e => handleChange('subject', e.target.value)}
          className={inputClass}
          placeholder="الموضوع"
        />

        <textarea
          required
          value={form.message}
          onChange={e => handleChange('message', e.target.value)}
          className={`${inputClass} h-36 resize-none`}
          placeholder="الرسالة *"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 shadow-lg bg-blue-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition disabled:opacity-60"
        >
          <Send className="h-5 w-5" />
          {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
        </button>

      </form>
    </div>

      </div>
    </>
  );
}
