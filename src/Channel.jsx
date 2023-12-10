import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Layout/Menu';
import LeftSideBar from './components/Layout/LeftSideBar';
import RightSideBar from './components/Layout/RightSideBar';
import Chat from './components/Layout/Chat';

function Channel() {

  return (
    <>
       < >
         <div className='flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
            <Menu />
            <LeftSideBar type = "channel" />
            <Chat />
            <RightSideBar />
          </div>
       </>
    </>
  )
}

export default Channel;
