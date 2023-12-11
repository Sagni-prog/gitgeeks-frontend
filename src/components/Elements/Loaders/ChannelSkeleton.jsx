import React from 'react'

const ChannelSkeleton = () => {
  return (
    <div className="header w-[90%] ml-6 flex gap-0">
      <div className="channel-img"></div>
      <div className="details">
        <span className="name py-1 w-[100%]"></span>
      </div>
    </div>
  )
  
}

export default ChannelSkeleton
