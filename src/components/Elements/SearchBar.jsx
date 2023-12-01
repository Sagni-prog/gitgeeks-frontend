import React from 'react';
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {
  return (
    <div className=''>
       <input className='relative w-[90%] h-11 pl-[16%] rounded-md border-none outline-none btn-bg' />
       <CiSearch className='absolute top-[18%] left-[7%] color-primary text-3xl'/>
    </div>
  )
}

export default SearchBar
