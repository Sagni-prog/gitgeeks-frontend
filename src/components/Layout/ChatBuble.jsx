import {React, useEffect} from 'react';
import MessageTimeLine from '../Elements/MessageTimeLine';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessages, selectLoadingState } from '../../features/message/messageSlice';
import ChatSkeleton from '../Elements/Loaders/ChatSkeleton';
import { Parser } from "html-to-react";


const ChatBuble = () => {

    const messages = useSelector(selectMessages);
    const isLoaded = useSelector(selectLoadingState);
    const htmlParser = new Parser();

    

  return (
    <div className='w-[100%] bubble-container flex flex-col  gap-3'>
         {
            messages.messages.map((data, index) => (
                <div key = {index}>
                    <div className='bubbles flex gap-[2%] px-6 py-3 cursor-pointer'>
                        <div className='w-[10%] bg-secondary mb-6 bubble-img cursor-pointer'>
                            <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border img' />
                        </div>  
                   <div className='w-[91%] flex flex-col text-left'>
                        <div className='flex gap-2'>
                            <div className='user-name mr-1 text-size-3'>{data.user.name}</div>
                            <div className='date flex items-center color-secondary text-size-1 gap-1'>
                                <p className='text-size-1'>{data.sent_at}</p>
                            </div>
                        </div>
                     <div className='message-content'>
                    <div className='break-all text-size-3'>{htmlParser.parse(data.message_body)}</div>
                  </div>
            </div>
        </div>
        </div>
            ))
        }

         {
            !isLoaded && <ChatSkeleton />
         }
    </div>
  )
}

export default ChatBuble
