import {React, useEffect, useState, useContext, useRef } from 'react'
import TextEditor from '../Elements/TextEditor'
import ChatBuble from './ChatBuble';
import { getNextPageMessages } from '../../api/messages/getMessages';
import { useSelector, useDispatch } from 'react-redux';
import { 
     addMessages,
     selectMessages,
     selectNextLink, 
     setLoading, 
     selectLoadingState,
     selectInitialLoad,
     selectIsAdded, 

  } from '../../features/message/messageSlice';
import { selectSingleChannel, selectLoad, selectChannel } from '../../features/channel/channelSlice';
import { debounce } from '../../utils/helper';
import { FaHashtag } from "react-icons/fa6";
import toggleContext from '../../contexts/toggleContext';



const ChatContent = () => {

  const nextLink = useSelector(selectNextLink)
  const messages = useSelector(selectMessages)
  const initialLoad = useSelector(selectInitialLoad);
  const loadingState = useSelector(selectLoadingState)
  const newAdded = useSelector(selectIsAdded)
  const channelId = useSelector(selectSingleChannel)
  const load = useSelector(selectLoad)
  const channel = useSelector((state) => selectChannel(state, channelId));
  
  const dispatch = useDispatch();

  const [loadingNextMessage, setLoadingNextMessage] = useState(false);
  const chatContainerRef = useRef(null);

  const { toggleState, dispatchToggle } = useContext(toggleContext);

  const handleClick = () => {
    dispatchToggle({
      type: 'TOGGLE',
      payload: "member"
    })
  }

  const getNextMessages = async(url) => {
    if(!loadingNextMessage){
      setLoadingNextMessage(true);
    }
    if(loadingState){
      dispatch(
        setLoading({
          isLoaded: false
        }))
      }
    const response = await getNextPageMessages(url);
   
    const newMessages = Object.values(response.data.data);
    dispatch(
      addMessages({
        messages: newMessages,
        nexLink: response.data.next_page_url,
      })) 
      setLoadingNextMessage(false);
  }

  const handleScroll = () => {

    const scrollableElement = chatContainerRef.current;
    const { scrollTop, clientHeight, scrollHeight } = scrollableElement;

    if (scrollTop <= scrollHeight / 3 && nextLink && !loadingNextMessage ) {
      setLoadingNextMessage(true);
      getNextMessages(nextLink);
      scrollableElement.scrollTop = scrollableElement.scrollHeight/2;
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 200);

  useEffect(() => {
      const scrollableElement = chatContainerRef.current;
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
  }, [initialLoad]);

  useEffect(() => {
   console.log(" this is the from chat content:",channel)
   console.log(" this is the from chat content but null:")
  },[channel])


  useEffect(() => {

    const scrollableElement = chatContainerRef.current;
    scrollableElement.addEventListener('scroll', debouncedHandleScroll);
    
    return () => {
      scrollableElement.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  return (
  
    <>
        <div className='absolute flex justify-between items-center content-center top-0 left-0 h-[7%] w-[100%] px-[4%] btn-bg'>
       {
         channel &&
           <div className='flex items-center content-center gap-5 channel-info'>
              <div className='flex items-center content-center gap-1 channel-name'>
                 <FaHashtag className='text-size-2' />
                 <p className='text-size-3'>{channel?.channel_name.substr(0, 10)}</p>
              </div>
              <div className='flex items-center channel-description color-secondary '>
                  <p className='text-size-2'>{channel?.description.substr(0, 50)}...</p>
              </div>
           </div>
       }

           <div className='flex channel-memebers' onClick={handleClick}>
            {
              channel?.users.map((user,index) => (
                index <= 3 && (
                  <div className='memebers-profile cursor-pointer overlap'>  
                  <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                </div> 
                ) 
              ))
            }
           </div>
        </div>
        <div 
          ref={chatContainerRef}
          style={{ 
            overflowY: 'auto',
            minHeight: "60%"
           }}
          className='w-[100%] scrollable mt-[8%]' id='scrollable'>
          <ChatBuble />
        </div>
        <TextEditor />
    </>
  )
}

export default ChatContent
