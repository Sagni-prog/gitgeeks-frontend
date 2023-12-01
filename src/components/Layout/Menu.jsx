import React from 'react'
import { BsChatFill } from "react-icons/bs";
import { BiSolidHomeAlt2 } from "react-icons/bi";



const Menu = () => {
  return (
    <div className='h-screen w-[6%]  fixed border-r'>
      <div className='flex flex-col	justify-center content-center items-center gap-[18px] mt-16'>
        <div className='flex flex-col justify-center items-center'>
            <BiSolidHomeAlt2 className = "color-primary text-3xl mb-1" />
            <p className='color-secondary text-sm text-center'>Home</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <BsChatFill className = "color-primary text-2xl	mb-1" />
            <p className='color-secondary text-sm'>DM</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <BsChatFill className = "color-primary text-2xl	mb-1" />
            <p className='color-secondary text-sm'>DM</p>
        </div>
      </div>    
      
    </div>
  )
}

export default Menu
