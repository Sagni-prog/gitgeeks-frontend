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

const ChannelMessage = () => {

  const dispatch = useDispatch();
  const channelId = useSelector(selectSingleChannel);
  const thisChannel = useSelector(selectedChannel);
  const channel = useSelector((state) => selectChannel(state, 9));

  const { id } = useParams();
  const [isOpen, setIdOpen] = useState(getCookie("isOpen"))
  const [thisChannlId, setThisChannlId] = useState("")

  const { modalState, dispatchModal } = useContext(modalContext);
  const { toggleState, dispatchToggle } = useContext(toggleContext);

  const handleClose = () => {
     dispatchModal({type: "CLOSE"})
  }
 

  useEffect(() => {
   setThisChannlId(id);
  },[])

  useEffect(() => {
       dispatch(setSelectedChannel({
         channelId: 9
       }))

  },[thisChannlId])

  useEffect(() => {
   console.log(" this is the selected one:",thisChannel)
  },[thisChannel])

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
            <Chat />  
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
