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
     selectIsAdded
  } from '../../features/message/messageSlice';

const Chat = () => {

  const is = false;
  const nextLink = useSelector(selectNextLink)
  const messages = useSelector(selectMessages)
  const initialLoad = useSelector(selectInitialLoad);
  const loadingState = useSelector(selectLoadingState)
  const newAdded = useSelector(selectIsAdded)
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
      
  }
  

  const handleScroll = () => {

    const scrollableElement = chatContainerRef.current;
    const { scrollTop, clientHeight, scrollHeight } = scrollableElement;

    if (scrollTop <= scrollHeight / 3 && nextLink && !loadingNextMessage ) {
      setLoadingNextMessage(true);
      getNextMessages(nextLink,scrollableElement,scrollHeight);
      scrollableElement.scrollTop = scrollableElement.scrollHeight / 2;
      console.log("now is the time to get old messages")
    }
  
  };

  const debouncedHandleScroll = debounce(handleScroll, 200);

  useEffect(() => {
    const scrollableElement = chatContainerRef.current;
    scrollableElement.scrollTop = scrollableElement.scrollHeight;
  }, [initialLoad]);

  useEffect(() => {
    const scrollableElement = chatContainerRef.current;
    scrollableElement.scrollTop = scrollableElement.scrollHeight/2;
  }, [newAdded]);


  useEffect(() => {

    const scrollableElement = chatContainerRef.current;
    scrollableElement.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      scrollableElement.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  useEffect(() => {
    console.log("from buuble:", messages.messages)
  },[messages])

  return (
  
    <div
       style={{
          width: is ? "73%": "48%"
       }}
        className='chat-content relative flex flex-col justify-start h-screen  ml-[27%] w-[73%]  border-r '>
        <div className='absolute top-0 left-0 h-[7%] w-[100%] btn-bg'></div>
        <div 
          ref={chatContainerRef}
          style={{ height: '400px', overflowY: 'auto' }}
          className='max-h-[64%] min-h[20%] w-[100%] scrollable mt-[8%]' id='scrollable'>
          <ChatBuble />
        </div>
        <TextEditor />
    </div>
  )
}

export default Chat
