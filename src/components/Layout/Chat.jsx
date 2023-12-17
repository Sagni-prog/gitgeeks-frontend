import {React, useEffect, useState, useRef } from 'react'
import TextEditor from '../Elements/TextEditor'
import ChatBuble from './ChatBuble';
import { getNextPageMessages } from '../../api/messages/getMessages';
import { sendChannelMessage } from '../../api/messages/sendMessage';
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
// import { IoSend } from "react-icons/io5";



const Chat = () => {

  const is = false;
  const [textContent, setTextCoontent] = useState()

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

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };


  
  // const handleSendChannelMessage = async() => {
  //   const sentData = {
  //     message_body: textContent
  //   }
  //    const respons = await sendChannelMessage(9,sentData)
  //    console.log("message sent:", respons);
  // }

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
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 200);


  useEffect(() => {
    const scrollableElement = chatContainerRef.current;
    scrollableElement.scrollTop = scrollableElement.scrollHeight;
    console.log("hello")
  }, [initialLoad]);


  useEffect(() => {
    const scrollableElement = chatContainerRef.current;
    scrollableElement.scrollTop = scrollableElement.scrollHeight/2;
  }, [newAdded]);


  useEffect(() => {

    const scrollableElement = chatContainerRef.current;
    scrollableElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
  
    <div
       style={{
          width: is ? "73%": "48%",
          height: '100%',
       }}
        className='chat-content relative flex flex-col justify-start   ml-[27%] w-[73%]  border-r mb-2'>
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
        {/* <div className='flex justify-center items-center mb-2 relative' style={{ maxHeight: '30%', }}>
           <TextEditor />
           <IoSend
          onClick={handleSendChannelMessage}
          size={25}
          style={{
            position: "absolute",
            top: "70%",
            left: "90%",
            color: "rgb(20 184 166)",
            cursor: "pointer"
           }}
        />
        </div> */}
    </div>
  )
}

export default Chat
