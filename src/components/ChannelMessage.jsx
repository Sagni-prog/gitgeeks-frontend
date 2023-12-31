import { useState, useEffect, useContext } from 'react'
import Menu from './Layout/Menu';
import LeftSideBar from './Layout/LeftSideBar';
import RightSideBar from './Layout/RightSideBar';
import Chat from './Layout/Chat';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectSingleChannel, setSingleChannel, setSelectedChannel, selectedChannel, selectChannel } from '../features/channel/channelSlice';
import { getCookie } from '../utils/cookieStorage';
import Modal from './Elements/Modals/Modal';
import modalContext from '../contexts/modalContext';
import EditChannelModal from './Elements/Modals/EditChannelModal';
import ProfileDetail from './Layout/ProfileDetail';
import toggleContext from '../contexts/toggleContext';
import MembersList from './Layout/MembersList';
import ChatContent from './Layout/ChatContent';


const ChannelMessage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const channelId = useSelector(selectSingleChannel);
  const thisChannel = useSelector(selectedChannel);
  const channel = useSelector((state) => selectChannel(state, id));

  
  const [isOpen, setIdOpen] = useState(getCookie("isOpen"))

  const { modalState, dispatchModal } = useContext(modalContext);
  const { toggleState, dispatchToggle } = useContext(toggleContext);

  const handleClose = () => {
     dispatchModal({type: "CLOSE"})
  }


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
         <div className='relative flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
            <Modal
                handleClose = {handleClose}
                show = {modalState.isOpen}
                id = {channelId}
            />
            <Menu />
            <LeftSideBar type = "channel" />
            <Chat>
               <ChatContent />
            </Chat>
            {
               toggleState.component === "profile" ? (
                  <RightSideBar >
                     <ProfileDetail />
                  </RightSideBar>
               ):
               (
                <RightSideBar>
                   <MembersList />
                </RightSideBar>
               )
            }
           
          </div>
       </>
    </>
  )
}

export default ChannelMessage;
