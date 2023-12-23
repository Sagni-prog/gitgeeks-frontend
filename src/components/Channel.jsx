import { useState, useEffect, useContext } from 'react'
import Menu from './Layout/Menu';
import LeftSideBar from './Layout/LeftSideBar';
import RightSideBar from './Layout/RightSideBar';
import Chat from './Layout/Chat';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectSingleChannel, setSingleChannel } from '../features/channel/channelSlice';
import storage from '../utils/storage';
import toggleContext from '../contexts/toggleContext';

const Channel = () => {

  const { toggleState, dispatchToggle } = useContext(toggleContext);

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



  return (
    <>
       <>
         <div className='flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
            <Menu />
            <LeftSideBar type = "channel" />
            {/* <Chat /> */}
            {
              toggleState && <RightSideBar />
            }
          
          </div>
       </>
    </>
  )
}

export default Channel;
