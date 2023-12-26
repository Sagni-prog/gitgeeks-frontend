import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSingleChannel, selectChannel } from '../../features/channel/channelSlice';

const MembersList = () => {

    const channelId = useSelector(selectSingleChannel)
    const channel = useSelector((state) => selectChannel(state, channelId));

  return (
    <>
      <div className='flex flex-col mt-1 w-[100%] h-[100%] color-secondary'>
        {
          channel?.users.map((user,index) =>
            <div className='cursor-pointer channel'>
               <div className='ml-2 flex items-center gap-2 pl-[8%] py-2'>
             
                    <div className='profile cursor-pointer'>  
                     <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                     </div> 
                
              <div className='w-[85%]'>
                <Link className='flex items-center justify-between' onClick={() => changeName()}>
                 <p>{user.name}</p> 
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
