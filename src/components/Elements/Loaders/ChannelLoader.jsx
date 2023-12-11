import React from 'react'
import ChannelSkeleton from './ChannelSkeleton'

const ChannelLoader = () => {
  return (
    <div className='flex flex-col gap-2'>
      <ChannelSkeleton />
      <ChannelSkeleton />
      <ChannelSkeleton />
      <ChannelSkeleton />
    </div>
  )
}

export default ChannelLoader
