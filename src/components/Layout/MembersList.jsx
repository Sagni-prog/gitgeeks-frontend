import React, {useContext} from 'react';
import { FaTimes } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSingleChannel, selectChannel } from '../../features/channel/channelSlice';
import toggleContext from '../../contexts/toggleContext';

const MembersList = () => {

    const channelId = useSelector(selectSingleChannel)
    const channel = useSelector((state) => selectChannel(state, channelId));
    const { toggleState, dispatchToggle } = useContext(toggleContext);  

    const close = () => {
      console.log("close")
      dispatchToggle({type: "OPEN"});
      storage.setToggle(toggleState.isOpen);
    }
  

  return (
    <>
      <div className='absolute top-0 left-0 flex justify-between items-center content-center w-[100%] btn-bg h-[7%] my-0 mx-auto z-[100] px-[5%]'>
            <div className='cursor-pointer'>
              <FaUsers className='text-size-5' />
            </div>
            <p className='text-size-3'>34 MEMBERS</p>
            <div className='cursor-pointer close'>
              <FaTimes className = 'text-size-5' onClick={close}/>
            </div>
          </div>
      <div className='relative flex flex-col mt-[14%] w-[100%] h-[100%] color-secondary scrollable'>
      
        {
          channel?.users.map((user,index) =>
            <div className='cursor-pointer channel'>
               <div className='ml-2 flex items-center gap-2 pl-[8%] py-2'>
             
                    <div className='member-profile profile cursor-pointer'>  
                     <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                     </div> 
                
              <div className='w-[85%]'>
                <Link className='flex items-center justify-between' onClick={() => changeName()}>
                 <p className='text-size-3'>{user.name}</p> 
               </Link>

              </div> 
            </div>  
          </div>
          )
        }
        </div>
    </>
  )
}

export default MembersList
