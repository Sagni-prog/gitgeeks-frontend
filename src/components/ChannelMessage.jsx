import { useState, useEffect, useContext } from 'react'
import Menu from './Layout/Menu';
import LeftSideBar from './Layout/LeftSideBar';
import RightSideBar from './Layout/RightSideBar';
import Chat from './Layout/Chat';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectSingleChannel, setSingleChannel } from '../features/channel/channelSlice';
import storage from '../utils/storage';
import { getCookie } from '../utils/cookieStorage';
import Modal from './Elements/Modals/Modal';
import modalContext from '../contexts/modalContext';
import EditChannelModal from './Elements/Modals/EditChannelModal';

const ChannelMessage = () => {

  const dispatch = useDispatch();
  const channelId = useSelector(selectSingleChannel);
  const { id } = useParams();
  const [isOpen, setIdOpen] = useState(getCookie("isOpen"))

  const { modalState, dispatchModal } = useContext(modalContext);


  useEffect(() => {
    dispatch(
      setSingleChannel({
        id: id
      })
    )

  },[]);

  const handleClose = () => {
     dispatchModal({type: "CLOSE"})
  }
  useEffect(() => {
   console.log("show modal:", modalState)
  },[modalState])

  return (
    <>
       <>
         <div className='relative flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
            <Modal
                handleClose = {handleClose}
                show = {modalState.isOpen}
            />
            
            {/* </Modal> */}
            <Menu />
            <LeftSideBar type = "channel" />
            <Chat />    
            <RightSideBar />
          </div>
       </>
    </>
  )
}

export default ChannelMessage;
