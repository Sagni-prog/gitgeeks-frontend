import React from 'react'
// import { MdDeviceHub } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoMdFolder } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";


const Menu = () => {
  return (
    <div className='h-screen w-[6%]  fixed border-r'>
      <div className='flex flex-col	justify-center content-center items-center gap-[18px] mt-16'>
        <div className='flex flex-col justify-center items-center border-active-r w-[100%]'>
            <BiSolidHomeAlt2 className = "color-primary text-3xl mb-1" />
            <p className='color-secondary text-xs text-center'>Home</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-[100%]'>
            <IoIosChatbubbles className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>DM</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-[100%]'>
            <HiSpeakerphone className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>Channel</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <IoMdFolder className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>Workspace</p>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <RiSettings5Fill className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>Settings</p>
        </div>
      </div>    
      
    </div>
  )
}

export default Menu
