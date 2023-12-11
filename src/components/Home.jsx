import{ React, useContext} from 'react'
import Menu from './Layout/Menu'
import LeftSideBar from './Layout/LeftSideBar'
import RightSideBar from './Layout/RightSideBar'
import Chat from './Layout/Chat'
import toggleContext from '../contexts/toggleContext'


const Home = () => {

  const {state,toggleDispatch} = useContext(toggleContext)
  return (
    <div className='flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
         <Menu />
         <LeftSideBar />
         <Chat />
         {
          state.toggle && <RightSideBar />
         }
         
    </div>
  )
}

export default Home
