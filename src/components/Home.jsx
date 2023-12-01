import React from 'react'
import Menu from './Layout/Menu'
import LeftSideBar from './Layout/LeftSideBar'

const Home = () => {
  return (
    <div className='flex justify-start content-center	color-primary w-screen	h-screen'>
         <Menu />
         <LeftSideBar />
    </div>
  )
}

export default Home
