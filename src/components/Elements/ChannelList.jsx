import {React, useState, useEffect} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { selectAllChannels, selectSingleChannel, updateChannel } from '../../features/channel/channelSlice';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const ChannelList = (props) => {

  const [selectedId, setSelectedId] = useState();
   
  const dispatch = useDispatch();
  const channels = useSelector(selectAllChannels);
  // const singleChannel = useSelector((state) => selectSingleChannel(state,selectedId))

  const changeName = (channel) => {
     const newChannel = {...channel, channel_name: "this is new name"}
     dispatch(
      updateChannel({id: channel.id, channels, newChannel})
     )
  }

  const handleChannelSelect = (channel) => {
    console.log("this is the selected channel: ",channel)
  }


  return (
    <div className='flex flex-col justify-start items-start content-center w-[100%] mt-6 '>
      <div className='flex items-center gap-1 content-center px-[6%]'>
        <FaAngleDown className='text-sm' />
        <h1 className=''>CHANNELS</h1>
      </div>
      <div className='flex flex-col mt-1 w-[100%] h-[100%] color-secondary'>
         {
           channels.map((data, index) => (
            <div className='cursor-pointer channel' key={index} >
               <div className='ml-2 flex items-center gap-2 pl-[8%] py-2'>

               <Skeleton /> 
             
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
                <p onClick={() => changeName(data)}>{ data.channel_name }</p>
              </div> 
            </div>  
          </div>
           ))
         }
        </div>
    </div>
  )
}

export default ChannelList
