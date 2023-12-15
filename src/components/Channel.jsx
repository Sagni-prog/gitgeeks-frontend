import { useState, useEffect } from 'react'
import Menu from './Layout/Menu';
import LeftSideBar from './Layout/LeftSideBar';
import RightSideBar from './Layout/RightSideBar';
import Chat from './Layout/Chat';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectSingleChannel, setSingleChannel } from '../features/channel/channelSlice';
const Channel = () => {

  const dispatch = useDispatch();
  const channelId = useSelector(selectSingleChannel);
  const { id } = useParams();

  useEffect(() => {
    dispatch(
      setSingleChannel({
        id: id
      })
    )
   
  },[])

  useEffect(() => {
    console.log("id:", channelId);
  },[channelId])
  
  return (
    <>
       <>
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
