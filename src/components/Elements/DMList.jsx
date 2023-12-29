import {React, useState, useEffect} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { selectAllChannels,selectChannelState, updateChannel } from '../../features/channel/channelSlice';
import ChannelLoader from './Loaders/ChannelLoader';
  
 
const DMList= () => {
  const [selectedId, setSelectedId] = useState();
   
  const dispatch = useDispatch();
  const channels = useSelector(selectAllChannels);
  const channelState = useSelector(selectChannelState)
  const [isOpen, setIsOpen] = useState(true)

  const hanleChannelList = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='flex flex-col justify-start items-start content-center w-[100%] mt-6'>
      <div className='flex items-center gap-1 content-center px-[6%] cursor-pointer' onClick={hanleChannelList}>
        {
          isOpen ?  <FaAngleDown className='text-sm' /> : <FaAngleRight className='text-sm' />
        }
      <h1 className=''>DIRECT MESSAGES</h1>
      </div>

      <div className={`${!isOpen ? 'none': ''} flex flex-col mt-1 w-[100%] h-[100%] color-secondary`}>
        {
          channelState.isLoaded == true ? (
         
           channels.map((data, index) => (
            <div className='cursor-pointer channel' key={index} >
               <div className='ml-2 flex items-center gap-2 pl-[8%] py-2'>
             
                {
                  data.photo !== null ?  (
                    <div className='profile cursor-pointer'>  
                     <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                     </div> 
                  ): (
                 <div className='flex justify-center items-center content-center'>   
                   <FaHashtag  />  
                   </div>
                  )
                }
               
              <div>
                <p onClick={() => changeName(data)}>{data.channel_name.substr(0, 19)}</p>
              </div> 
            </div>  
          </div>
           ))
         ):
         (
          <ChannelLoader />
         )
        }
        </div>
    </div>
  )
}

export default DMList
