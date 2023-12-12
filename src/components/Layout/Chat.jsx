import {React, useEffect} from 'react'
import TextEditor from '../Elements/TextEditor'
import ChatBuble from './ChatBuble';
import { getNextPageMessages } from '../../api/messages/getMessages';
import { useSelector, useDispatch } from 'react-redux';
import { addMessages, selectMessages, selectNextLink, setLoading, selectLoadingState } from '../../features/message/messageSlice';

const Chat = () => {

  const is = false;
  const nextLink = useSelector(selectNextLink)
  const messages = useSelector(selectMessages)
  const loadingState = useSelector(selectLoadingState)
  const dispatch = useDispatch()

  const getNextMessages = async(url) => {
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
  
    const scrollableElement = document.getElementById('scrollable');
    const { scrollTop, clientHeight, scrollHeight } = scrollableElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
       getNextMessages(nextLink);
      console.log("call now")
    }
  };

  useEffect(() => {
    const scrollableElement = document.getElementById('scrollable');
    scrollableElement.addEventListener('scroll', handleScroll);

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
      <div className='absolute top-0 left-0 h-[7%] w-[100%] btn-bg'>
      </div>
      <div className='max-h-[64%] min-h[20%] w-[100%] scrollable mt-[8%]' id='scrollable'>
      <ChatBuble />
      </div>
        <TextEditor />
    </div>
  )
}

export default Chat
