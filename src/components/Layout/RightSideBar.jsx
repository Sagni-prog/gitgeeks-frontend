import {React , useEffect, useState, useContext} from 'react'
import toggleContext from '../../contexts/toggleContext';
import storage from '../../utils/storage';

const RightSideBar = ({children}) => {

  const { toggleState, dispatchToggle } = useContext(toggleContext);  

  const close = () => {
    console.log("close")
    dispatchToggle({type: "OPEN"});
    storage.setToggle(toggleState.isOpen);
  }


  return (
    <div className="fixed h-screen w-[25%] ml-[75%] bg-secondry scrollable" id = "right-side-bar">
       {children}
    </div>
  )
}

export default RightSideBar
