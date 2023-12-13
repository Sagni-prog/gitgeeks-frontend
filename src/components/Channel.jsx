import { useState, useEffect } from 'react'
import Menu from './Layout/Menu';
import LeftSideBar from './Layout/LeftSideBar';
import RightSideBar from './Layout/RightSideBar';
import Chat from './Layout/Chat';
import { useParams } from 'react-router-dom';




const Channel = () => {

  const { channelId } = useParams(); 
  console.log("this is channel id:",channelId)

  return (
    <>
       <>
         <div className='flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
            <Menu />
            <LeftSideBar type = "channel" />
            <Chat id = {channelId} />
            <RightSideBar />
          </div>
       </>
    </>
  )
}

export default Channel;
