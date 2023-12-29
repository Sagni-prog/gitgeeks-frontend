import {React, useState, useEffect, useContext} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAllChannels, 
  selectChannelState,
  setSingleChannel
   } from '../../features/channel/channelSlice';
import ChannelLoader from './Loaders/ChannelLoader';
import { Link, useNavigate } from 'react-router-dom';
import { setMessages, selectMessages, setInitialLoad } from '../../features/message/messageSlice';
import { getChannelMessages } from '../../api/messages/getMessages';
import { RiSettings5Fill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import modalContext from '../../contexts/modalContext';
import storage from '../../utils/storage';



const ChannelList = (props) => {

  const { modalState, dispatchModal } = useContext(modalContext);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const channels = useSelector(selectAllChannels);
  const channelState = useSelector(selectChannelState)
  const user = storage.getUser();

  const [isOpen, setIsOpen] = useState(true)

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
     dispatch(
      setInitialLoad({initialLoad: true})
     )
     dispatch(
      setSingleChannel({
        id: channel.id
      })
    )
  }

  const handleChannelSelect = (channel) => {
   
  }

  const hanleChannelList = () => {
    setIsOpen(!isOpen);
  }

  const handleEditChannel = (channel) => {

      dispatch(
      setSingleChannel({
        id: channel.id
      })
    )
    dispatchModal({type: "OPEN"})
  }

  const handleClose = () => {
    setShow(false)
  }



  return (
    <div className='relative flex flex-col justify-start items-start content-center w-[100%] mt-6 '>
      <div className='flex items-center gap-1 content-center px-[6%] cursor-pointer' onClick = {hanleChannelList} >
        {
          isOpen ?  <FaAngleDown className='text-sm' /> : <FaAngleRight className='text-sm' />
        }
       
        <h1 className=''>CHANNELS</h1>
      </div>
     
      <div className={`${!isOpen ? 'none' : ''} flex flex-col mt-1 w-[100%] h-[100%] color-secondary`}>
        {
          channelState.isLoaded == true ? (
         
           channels?.map((data, index) => (
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
               
              <div className='w-[85%]'>
                <Link className='flex items-center justify-between' onClick={() => changeName(data)}>
                 <p>{data.channel_name.substr(0, 19)}</p> 
                 {
                  data.owner_id === user.id ?  
                  <div className='flex items-center gap-1'>
                      <FaUserPlus size={18} />
                      <RiSettings5Fill size={18} className='' onClick= {() => handleEditChannel(data)}/>
                  </div>
                  : ''
                 }
                 
               </Link>

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
