import React from 'react'
import TextEditor from '../Elements/TextEditor'
import { IoSend } from "react-icons/io5";


const Chat = () => {
  return (
    <div className='flex justify-center h-screen  ml-[27%] w-[48%]  border-r '>
      <div className='h-[74%] scrollable'>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, amet veniam esse officia quis ducimus repellendus? Tenetur ipsum incidunt rerum, ex ullam, quidem excepturi officia at dolore corporis ab.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, amet veniam esse officia quis ducimus repellendus? Tenetur ipsum incidunt rerum, ex ullam, quidem excepturi officia at dolore corporis ab.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, amet veniam esse officia quis ducimus repellendus? Tenetur ipsum incidunt rerum, ex ullam, quidem excepturi officia at dolore corporis ab.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas, amet veniam esse officia quis ducimus repellendus? Tenetur ipsum officia quis ducimus repellendus? Tenetur ipsum 
        </p>
      </div>
      <div className='relative w-[100%]'> 
        <TextEditor />
        {/* <IoSend /> */}
      </div>
    </div>
  )
}

export default Chat
