import React from 'react'
import TextEditor from '../Elements/TextEditor'

const Chat = () => {
  return (
    <div className='flex justify-end h-screen ml-[27%] w-[48%]  border-r scrollable'>
      <div>
        <p></p>
      </div>
      <div className='relative w-[100%]'> 
        <TextEditor />
      </div>
    </div>
  )
}

export default Chat
