import React from 'react'

const MessageTimeLine = (props) => {
  return (
    <div className='w-[90%] mx-auto timeline color-primary '>
      <p className='text-xs'>{props.date}</p>
    </div>
  )
}

export default MessageTimeLine
