import { useState, useEffect } from 'react'
import Menu from './Layout/Menu';
import LeftSideBar from './Layout/LeftSideBar';
import RightSideBar from './Layout/RightSideBar';
import Chat from './Layout/Chat';

function Dm() {

  return (
    <>
      <div className='flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
        <Menu />
        <LeftSideBar type = "dm" />
        <Chat />
        <RightSideBar />
      </div>
    </>
  )
}

export default Dm;