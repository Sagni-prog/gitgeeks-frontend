import React from 'react'
// import { MdDeviceHub } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoMdFolder } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";


const Menu = () => {
  return (
    <div className='h-screen w-[6%]  fixed flex flex-col items-center justify-between border-r'>
      <div className='flex flex-col	justify-center content-center items-center gap-[18px] mt-16'>
        <div className='flex flex-col justify-center items-center border-active-r w-[100%] cursor-pointer'>
            <BiSolidHomeAlt2 className = "color-primary text-3xl mb-1" />
            <p className='color-secondary text-xs text-center'>Home</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-[100%] cursor-pointer'>
            <IoIosChatbubbles className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>DM</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-[100%] cursor-pointer'>
            <HiSpeakerphone className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>Channel</p>
        </div>

        <div className='flex flex-col justify-center items-center w-[100%] cursor-pointer'>
            <IoMdFolder className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>Workspace</p>
        </div>

        <div className='flex flex-col justify-center items-center w-[100%] cursor-pointer'>
            <RiSettings5Fill className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>Settings</p>
        </div>
      </div>  

      <div className='bg-secondary mb-6  bottom-profile cursor-pointer'>
        <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
      </div>  
      
    </div>
  )
}

export default Menu
