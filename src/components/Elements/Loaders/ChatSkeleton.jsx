import React from 'react'
import SkeletonLoader from './SkeletonLoader'

const ChatSkeleton = () => {
  return (
    <div className='w-[100%] bubble-container flex flex-col'>
        <SkeletonLoader />
        <SkeletonLoader />
        <SkeletonLoader />
    </div>
  )
}

export default ChatSkeleton
