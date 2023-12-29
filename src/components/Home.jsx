import{ React, useContext, useEffect} from 'react'
import Menu from './Layout/Menu'
import LeftSideBar from './Layout/LeftSideBar'
import RightSideBar from './Layout/RightSideBar'
import UserContent from './Layout/UserContent'
import ProfileDetail from './Layout/ProfileDetail';

const Home = () => {

  let rightdside =  document.getElementById('right-side-bar');

  useEffect(() => {
    let rightdside =  document.getElementById('right-side-bar');
    let chatContent = document.getElementById('chat-content');
     
       rightdside.classList.remove("none");
    },[])


  return (
    <div className='flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
         <Menu />
         <LeftSideBar />
          <UserContent />
         <RightSideBar>
            <ProfileDetail />
         </RightSideBar>
    </div>
  )
}

export default Home
