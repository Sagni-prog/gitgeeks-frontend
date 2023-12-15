import {React, useState, useEffect} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAllChannels, 
  selectChannelState,
   } from '../../features/channel/channelSlice';
import ChannelLoader from './Loaders/ChannelLoader';
import { Link, useNavigate } from 'react-router-dom';
import { setMessages, selectMessages } from '../../features/message/messageSlice';
import { getChannelMessages } from '../../api/messages/getMessages';

const ChannelList = (props) => {

  const navigate = useNavigate();
  const channels = useSelector(selectAllChannels);
  const channelState = useSelector(selectChannelState)

  const messages = useSelector(selectMessages)
    const dispatch = useDispatch()

    const getMessage = async(id) => {
        const response = await getChannelMessages(id);
        dispatch(
         setMessages({
           messages: response.data.data.reverse(),
           nexLink: response.data.next_page_url,
           isLoaded: true,
           initialLoad: true
         }))
     }

  const changeName = (channel) => {
    
     getMessage(channel.id)
     navigate(`/channels/${channel.id}`)

  
    //  const newChannel = {...channel, channel_name: "this is new name"}
    //  dispatch(
    //   updateChannel({id: channel.id, channels, newChannel})
    //  )
  }

  const handleChannelSelect = (channel) => {
   
  }



  return (
    <div className='flex flex-col justify-start items-start content-center w-[100%] mt-6 '>
      <div className='flex items-center gap-1 content-center px-[6%]'>
        <FaAngleDown className='text-sm' />
        <h1 className=''>CHANNELS</h1>
      </div>
     
      <div className='flex flex-col mt-1 w-[100%] h-[100%] color-secondary'>
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
                <Link onClick={() => changeName(data)}>{data.channel_name.substr(0, 19)}</Link>
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

export default ChannelList
