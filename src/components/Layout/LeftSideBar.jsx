import React from 'react'
import SearchBar from '../Elements/SearchBar'
import ChannelList from '../Elements/ChannelList'
import DMList from '../Elements/DMList'

const LeftSideBar = (props) => {
  return (
    <div className='left-side-bar flex fixed flex-col h-screen w-[21%] ml-[6%] bg-secondry border-r scrollable'>
        <div className='relative search-bar w-[100%] mt-4'>
            <SearchBar />

        </div>
      {
       props.type === "dm" ? (
        <div className='flex flex-col items-center w-[100%] gap-6'>
          <DMList />
          <ChannelList />
        </div>
       ): (
        <div className='flex flex-col items-center w-[100%] gap-6'>
        <ChannelList />
        <DMList />
      </div>
       )
      }
    </div>
  )
}

export default LeftSideBar
