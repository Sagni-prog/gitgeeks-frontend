import{ React, useEffect, useState,useContext  }from 'react'
import { MdDeviceHub } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { IoMdFolder } from "react-icons/io";
import { HiSpeakerphone } from "react-icons/hi";
import { RiSettings5Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import toggleContext from '../../contexts/toggleContext';
import storage from '../../utils/storage';


const Menu = () => {

  const initialToggle = storage.getToggle();
  const [toggle, setToggle] = useState(storage.getToggle())
  const { toggleState, dispatchToggle } = useContext(toggleContext);

  const handleToggle =  () => {
    dispatchToggle({
      type: 'TOGGLE',
      payload: "profile"
    })
    storage.setToggle(toggleState.isOpen);
  }

  useEffect(() => {
    const rightdside =  document.getElementById('right-side-bar');
    const chatContent = document.getElementById('chat-content');
     if(storage.getToggle() === true){
      console.log("true storage: ",initialToggle)
      console.log("true storage")
       rightdside.classList.remove("none");
       chatContent.classList.add("w-[48%]")
       chatContent.classList.remove("w-[73%]")
      }else {
        console.log("false storage: ",initialToggle)
        console.log("false storage")
        rightdside.classList.add("none");
        chatContent.classList.remove("w-[48%]")
        chatContent.classList.add("w-[73%]")
      }
    },[])
  
    useEffect(() => {
      console.log("open state",toggleState)
    const rightdside =  document.getElementById('right-side-bar');
    const chatContent = document.getElementById('chat-content');
     if(toggleState.isOpen){
       rightdside.classList.add("none");
       chatContent.classList.remove("w-[48%]")
       chatContent.classList.add("w-[73%]")
      }else {
       rightdside.classList.remove("none");
       chatContent.classList.add("w-[48%]")
       chatContent.classList.remove("w-[73%]")
      }
    },[toggleState])



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
        <MdDeviceHub className='text-size-xl' />
    </div>

    <div className='flex flex-col items-center justify-between h-[100%] w-[100%] border-r'>
      <div className='flex flex-col	justify-center content-center items-center gap-[18px]  w-[100%]'>
        <div className='flex flex-col justify-center items-center border-active-r w-[100%]'>
            <BiSolidHomeAlt2 className = "color-primary text-size-xl mb-1" />
            <p className='color-secondary text-size-1 text-center'>Home</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-[100%] cursor-pointer' onClick={navigateDM}>
            <IoIosChatbubbles className = "color-primary text-size-xl	mb-1" />
            <p className='color-secondary text-size-1'>DM</p>
        </div>

        <div className='flex flex-col justify-center items-center  w-[100%] cursor-pointer' onClick={navigateChannel}>
            <HiSpeakerphone className = "color-primary text-size-xl	mb-1" />
            <p className='color-secondary text-size-1'>Channel</p>
        </div>

        <div className='flex flex-col justify-center items-center w-[100%] cursor-pointer'>
            <IoMdFolder className = "color-primary text-size-xl	mb-1" />
            <p className='color-secondary text-size-1'>Workspace</p>
        </div>

        <div className='flex flex-col justify-center items-center w-[100%] cursor-pointer'>
            <RiSettings5Fill className = "color-primary text-size-xl	mb-1" />
            <p className='color-secondary text-size-1'>Settings</p>
        </div>
      </div>  
 
      <div className='bg-secondary mb-6  bottom-profile cursor-pointer' onClick={handleToggle}>
        <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
      </div>  
    </div>
    </div>
  )
}

export default Menu
