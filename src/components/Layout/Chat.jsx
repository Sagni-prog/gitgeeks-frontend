import React from 'react'
import TextEditor from '../Elements/TextEditor'
import { IoSend } from "react-icons/io5";


const Chat = () => {
  return (
    <div className='chat-content flex flex-col justify-start h-screen  ml-[27%] w-[48%]  border-r '>
      <div className='chat-bubble-contatiner grow shrink max-h-[74%] min-h[20%] w-[100%] scrollable '>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, amet veniam esse officia quis ducimus repellendus? Tenetur ipsum incidunt rerum, ex ullam, quidem 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, amet veniam esse officia quis ducimus repellendus? Tenetur ipsum incidunt rerum, ex ullam, quidem 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non 
        </p>
      </div>
      {/* <div className=' min-h-[40%] grow shrink w-[100%]'>  */}
        <TextEditor />
        {/* <IoSend /> */}
      {/* </div> */}
    </div>
  )
}

export default Chat
