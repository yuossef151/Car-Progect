import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function FootarNav() {
    const nav =[
        {
name:"الرئيسية",
link:"/"
        },
        {
name:"المتجر",
link:"Shop"
        },
        {
name:"طلب قطعة خاصة",
link:"request-part"

        },
        {
name:"من نحن",
link:"about"

        },
        {
name:"اتصل بنا",
link:"Contact-us"

        },
    ]
    const nav2 =[
        {
name:"الشروط والأحكام",
        },
        {
name:"سياسة الخصوصية",
        },
        {
name:"سياسة الاسترجاع",
        },
        {
name:"طرق الدفع",
        },
        {
name:" الشحن والتوصيل",
        },
    ]
    const nav3 =[
        {
name:"+966 50 123 4567",
img:<Phone className="h-4 w-4" />        },
        {
name:"info@autoparts.sa",
 img: <Mail className="h-4 w-4" />,        },
        {
name:"الرياض، المملكة العربية السعودية",
img: <MapPin className="h-4 w-4" />,        },
    ]
  return (
    <>
      <div className='lg:flex lg:flex-row flex flex-col gap-10 lg:gap-0 justify-around grow'>
        <ul className='flex flex-col gap-2'>
            <p className='text-white'>روابط سريعة</p>
            {
                nav.map((el,index)=>{
                    return <i className='hover:text-white text-[#b1b0b0]'><Link to={el.link}>{el.name}</Link></i>
                })
            }
        </ul>
        <ul className='flex flex-col gap-2'>
            <p className='text-white'>خدمة العملاء</p>
            {
                nav2.map((el,index)=>{
                    return <i className='hover:text-white text-[#b1b0b0]'><Link>{el.name}</Link></i>
                })
            }
        </ul>
        <ul className='flex flex-col gap-2'>
            <p className='text-white'>تواصل معنا</p>
            {
                nav3.map((el,index)=>{
                    return <i className=' text-[#b1b0b0] flex gap-2 items-center'>{el.img} <p>{el.name}</p></i>
                })
            }
            <div className='flex gap-4 pt-4'>
                <FaFacebook  className='text-[#b1b0b0] hover:text-blue-600 w-5 h-5' />
                <FaInstagram  className='text-[#b1b0b0] hover:text-pink-400 w-5 h-5' />
                <FaXTwitter   className='text-[#b1b0b0] hover:text-black w-5 h-5' />
            </div>
        </ul>
      </div>
    </>
  )
}
