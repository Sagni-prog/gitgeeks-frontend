import React, {useContext} from 'react';
import Button from '../Elements/Buttons/Button';
import { FaTimes } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import minions from  '../../assets/minion.jpg';
import { FiMessageCircle } from "react-icons/fi";
import toggleContext from '../../contexts/toggleContext';

const ProfileDetail = () => {

  const { toggleState, dispatchToggle } = useContext(toggleContext);  

  const close = () => {
    console.log("close")
    dispatchToggle({type: "OPEN"});
    storage.setToggle(toggleState.isOpen);
  }

  return (
    <>
       <div className='absolute top-0 left-0 h-[7%] w-[100%] btn-bg'>
          <div className='flex justify-between items-center content-center h-[100%] w-[90%] my-0 mx-auto'>
            <div className='cursor-pointer'>
              <p className='text-size-3'>Profile</p>
            </div>
            <div className='cursor-pointer close'>
              <FaTimes className = 'text-size-3'  onClick={close}/>
            </div>
          </div>
        </div>

        <div className='mt-[20%] flex justify-center'>
          <div className='bg-secondary mb-6 img-container cursor-pointer'>
            <img src = {minions} className='rounded-full border img' />
          </div> 
        </div>

        <div className='mb-2'>
          <p className='font-medium text-size-6'>Sagni Alemayehu</p>
        </div>

        <div className='flex items-center justify-center gap-2'>
          <LuClock3 className= "text-lg text-size-3" />
          <p className='text-size-3'>11:34</p>
          <p className='text-size-3'>PM</p>
          <p className='text-size-3'>(yesterday)</p>
          <p className='text-size-3'>local time</p>
        </div>

        <div className='flex justify-center gap-3 mt-5'>
          <Button
            buttStyle = {{
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "3.6rem",
              paddingRight: '3.6rem',
              fontSize: "1.6rem"
            }}
            title = "Message" 
            icons = {<FiMessageCircle className='text-size-3' />}
          />
          <Button 
            buttStyle = {{
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingLeft: "3.6rem",
              paddingRight: '3.6rem',
              fontSize: "1.6rem"
            }}
            title = "Request DM"
          />
        </div>
    </>
  )
}

export default ProfileDetail
