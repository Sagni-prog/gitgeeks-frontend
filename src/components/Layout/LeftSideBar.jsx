import React from 'react'
import SearchBar from '../Elements/SearchBar'
import DM from '../Elements/DM'
import Channels from '../Elements/Channels'

const LeftSideBar = () => {
  return (
    <div className='flex flex-col h-screen w-[21%] ml-[6%] bg-secondry border-r'>
        <div className='relative search-bar w-[100%] mt-4'>
            <SearchBar />

        </div>

        <div className='flex flex-col items-center w-[100%] gap-6'>
          <DM />
          <Channels />
        </div>
    </div>
  )
}

export default LeftSideBar
