import React from 'react'
import SearchBar from '../Elements/SearchBar'

const LeftSideBar = () => {
  return (
    <div className='flex flex-col h-screen w-[21%] ml-[6%] bg-secondry border-r pl-2'>
        <div className='relative search-bar w-[100%] mt-4'>
            <SearchBar />
        </div>

        <div className='flex flex-col justify-between content-center'>

        </div>
    </div>
  )
}

export default LeftSideBar
