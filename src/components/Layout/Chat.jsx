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



const Chat = ({children}) => {


  return (
  
    <div
        className='chat-content relative flex flex-col justify-start   ml-[27%] w-[73%]  border-r mb-2' id = "chat-content">
        {children}
    </div>
  )
}

export default Chat
