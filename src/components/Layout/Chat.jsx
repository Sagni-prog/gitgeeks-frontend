import {React, useEffect, useState, useRef } from 'react'
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
import { selectSingleChannel, selectLoad } from '../../features/channel/channelSlice';
import { debounce } from '../../utils/helper';



const Chat = () => {

  const is = false;

  const nextLink = useSelector(selectNextLink)
  const messages = useSelector(selectMessages)
  const initialLoad = useSelector(selectInitialLoad);
  const loadingState = useSelector(selectLoadingState)
  const newAdded = useSelector(selectIsAdded)
  const channelId = useSelector(selectSingleChannel)
  const load = useSelector(selectLoad)
  const dispatch = useDispatch();

  const [loadingNextMessage, setLoadingNextMessage] = useState(false);
  const chatContainerRef = useRef(null);

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
      console.log("hello initial load")
  }, [initialLoad]);


  useEffect(() => {

    const scrollableElement = chatContainerRef.current;
    scrollableElement.addEventListener('scroll', debouncedHandleScroll);
    
    return () => {
      scrollableElement.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  return (
  
    <div
       
        className='chat-content relative flex flex-col justify-start   ml-[27%] w-[73%]  border-r mb-2' id = "chat-content">
        <div className='absolute top-0 left-0 h-[7%] w-[100%] btn-bg'></div>
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
    </div>
  )
}

export default Chat
