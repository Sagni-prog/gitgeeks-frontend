import React from 'react'
import { MdDeviceHub } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoMdFolder } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const Menu = () => {

  const navigate = useNavigate();

  const navigateChannel = () => {
     navigate('/channels')
  }
  const navigateDM = () => {
     navigate('/dm')
  }

  return (
    <div className='menu-bar rounded-t-md	 flex flex-col justify-center items-center content-center h-screen w-[6%]  fixed'>
    <div className='flex justify-center content-center items-center mt-6 mb-12 cursor-pointer'>
        <MdDeviceHub className='text-3xl' />
    </div>

    <div className='flex flex-col items-center justify-between h-[100%] w-[100%] border-r'>
      <div className='flex flex-col	justify-center content-center items-center gap-[18px]  w-[100%]'>
        <div className='flex flex-col justify-center items-center border-active-r w-[100%]'>
            <BiSolidHomeAlt2 className = "color-primary text-3xl mb-1" />
            <p className='color-secondary text-xs text-center'>Home</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-[100%] cursor-pointer' onClick={navigateDM}>
            <IoIosChatbubbles className = "color-primary text-3xl	mb-1" />
            <p className='color-secondary text-xs'>DM</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-[100%] cursor-pointer' onClick={navigateChannel}>
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
    </div>
  )
}

export default Menu
