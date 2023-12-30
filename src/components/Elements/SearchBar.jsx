import React from 'react';
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {
  return (
    <div className='h-[3rem]'>
       <input 
       className='relative w-[90%] h-[100%] pl-[6%] rounded-md border-none outline-none btn-bg text-size-3'
       placeholder='Search'
        />
       <CiSearch className='search color-primary text-size-6'/>
    </div>
  )
}

export default SearchBar
