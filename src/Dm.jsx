import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Layout/Menu';
import LeftSideBar from './components/Layout/LeftSideBar';
import RightSideBar from './components/Layout/RightSideBar';
import Chat from './components/Layout/Chat';

function Dm() {

  return (
    <>
       < >
       <div className='flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
         <Menu />
         <LeftSideBar type = "dm" />
         <Chat />
         <RightSideBar />
          </div>
       </>
    </>
  )
}

export default Dm;