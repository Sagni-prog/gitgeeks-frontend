import React from 'react'
import TextEditor from '../Elements/TextEditor'

const Chat = () => {
  return (
    <div className='flex justify-end h-screen w-[48%]  border-r'>
      <div className='relative w-[100%]'> 
        <TextEditor />
      </div>
    </div>
  )
}

export default Chat
