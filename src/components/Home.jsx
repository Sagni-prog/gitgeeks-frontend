import{ React, useContext, useEffect} from 'react'
import Menu from './Layout/Menu'
import LeftSideBar from './Layout/LeftSideBar'
import RightSideBar from './Layout/RightSideBar'
import Chat from './Layout/Chat'

const Home = () => {

  return (
    <div className='flex justify-start content-center	color-primary w-screen	h-screen gap-0'>
         <Menu />
         <LeftSideBar />
         <Chat />
         <RightSideBar /> 
    </div>
  )
}

export default Home
