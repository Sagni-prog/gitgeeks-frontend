import React from 'react'
import TextEditor from '../Elements/TextEditor'
import ChatBuble from './ChatBuble';




const Chat = () => {

  const is = false;
  return (
    <div
       style={{
          width: is ? "73%": "48%"
       }}
    className='chat-content relative flex flex-col justify-start h-screen  ml-[27%] w-[73%]  border-r '>
      <div className='absolute top-0 left-0 h-[7%] w-[100%] btn-bg'>
      </div>
      <div className='max-h-[64%] min-h[20%] w-[100%] scrollable mt-[8%] '>
        <ChatBuble />
      </div>
      {/* <div className=' min-h-[40%] grow shrink w-[100%]'>  */}
        <TextEditor />
      {/* </div> */}
    </div>
  )
}

export default Chat
