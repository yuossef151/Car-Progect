import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { brands, models, categories } from './data'

export default function Filter({ onFilter, onReset ,opn, setopn, menuRef }) {

  const [openSections, setOpenSections] = useState({
    car: true,
    category: true,
    price: false,
  })

  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    category: '',
    priceMin: '',
    priceMax: '',
  })

  const toggle = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const handleChange = (key, value) => {
    const updated = { ...filters, [key]: value }
    if (key === 'brand') updated.model = ''
    setFilters(updated)
    onFilter(updated)
  }

  const handleReset = () => {
    const empty = { brand: '', model: '', category: '', priceMin: '', priceMax: '' }
    setFilters(empty)
    onReset()
  }

  const selectClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-right text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"

  const SectionHeader = ({ label, section }) => (
    <button onClick={() => toggle(section)} className="flex justify-between items-center w-full py-3">
      <span className="text-gray-500">
        {openSections[section] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </span>
      <span className="font-bold text-gray-800">{label}</span>
    </button>
  )

  return (
    <>
    <div className={`${opn ? "lg:hidden fixed inset-0 bg-gray-700/50 z-10" : "hidden"}`}></div>
        <div ref={menuRef} className={`bg-white rounded-2xl  lg:flex lg:flex-col shadow-md p-5 w-[30%] ${opn?"lg:static lg:z-0 lg:w-[30%]  md:w-[50%] w-[80%] md:left-[25%] left-[10%] fixed top-[25%] z-20":"hidden"}`} dir="rtl">
      <h2 className="text-lg font-bold text-gray-900 mb-4">فلترة النتائج</h2>

      <div className="border-b border-gray-200 pb-3 mb-3">
        <SectionHeader label="السيارة" section="car" />
        {openSections.car && (
          <div className="flex flex-col gap-3 mt-2">
            <select value={filters.brand} onChange={e => handleChange('brand', e.target.value)} className={selectClass}>
              <option value="">الماركة</option>
              {brands.map(b => <option key={b} value={b}>{b}</option>)}
            </select>

            <select value={filters.model} onChange={e => handleChange('model', e.target.value)} disabled={!filters.brand} className={`${selectClass} disabled:opacity-50`}>
              <option value="">الموديل</option>
              {(models[filters.brand] || []).map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
        )}
      </div>

      <div className="border-b border-gray-200 pb-3 mb-3">
        <SectionHeader label="الفئة" section="category" />
        {openSections.category && (
          <select value={filters.category} onChange={e => handleChange('category', e.target.value)} className={`${selectClass} mt-2`}>
            <option value="">نوع القطعة</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        )}
      </div>

      <button onClick={handleReset} className="w-full mt-3 py-2 border border-blue-500 text-blue-600 rounded-lg text-sm hover:bg-blue-50 transition">
        إعادة تعيين الفلاتر
      </button>
    </div>
    </>

  )
}