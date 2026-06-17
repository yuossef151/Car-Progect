import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({opn,setopn ,menuRef}) {
        
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
  return (
    <>
      <div ref={menuRef} className={`lg:flex lg:static lg:w-auto absolute  top-[82px] w-full left-0 bg-white ${opn?"":"hidden"}`}>
        <ul className='lg:flex lg:flex-row flex flex-col px-10 py-6 gap-5 lg:gap-10 '>
            {
                nav.map((el,index)=>{
                    return <i className='hover:text-blue-600 '><Link to={el.link} onClick={()=>{
                        setopn(false)
                    }}>{el.name}</Link></i>
                })
            }
        </ul>
      </div>
    </>
  )
}
