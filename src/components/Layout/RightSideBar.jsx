import {React , useEffect, useState, useContext} from 'react'
import { FaTimes } from "react-icons/fa";
import Button from '../Elements/Buttons/Button';
import { LuClock3 } from "react-icons/lu";
import minions from  '../../assets/minion.jpg'
import { FiMessageCircle } from "react-icons/fi";
import toggleContext from '../../contexts/toggleContext';
import storage from '../../utils/storage';

const RightSideBar = () => {

  const { toggleState, dispatchToggle } = useContext(toggleContext);  

  const close = () => {
    console.log("close")
    dispatchToggle({type: "OPEN"});
    storage.setToggle(toggleState.isOpen);
  }


  return (
    <div className="fixed h-screen w-[25%] ml-[75%] bg-secondry" id = "right-side-bar">
        <div className='absolute top-0 left-0 h-[7%] w-[100%] btn-bg'>
          <div className='flex justify-between items-center content-center h-[100%] w-[90%] my-0 mx-auto'>
            <div className='cursor-pointer'>
              <p>Profile</p>
            </div>
            <div className='cursor-pointer close'>
              <FaTimes  onClick={close}/>
            </div>
          </div>
        </div>

        <div className='mt-[20%] flex justify-center'>
          <div className='bg-secondary mb-6 img-container cursor-pointer'>
            <img src = {minions} className='rounded-full border img' />
          </div> 
        </div>

        <div className='mb-2'>
          <p className='text-2xl font-medium'>Sagni Alemayehu</p>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <LuClock3 className= "text-lg" />
          <p>11:34</p>
          <p>PM</p>
          <p>(yesterday)</p>
          <p>local time</p>
        </div>

        <div className='flex justify-center gap-3 mt-5'>
          <Button
            buttStyle = {{
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "36px",
              paddingRight: '36px'
            }}
            title = "Message" 
            icons = {<FiMessageCircle />}
          />
          <Button 
            buttStyle = {{
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "36px",
              paddingRight: '36px'
            }}
            title = "Request DM"
          />
        </div>
        
    </div>
  )
}

export default RightSideBar
