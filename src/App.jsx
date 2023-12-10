import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import getAllChannels from './api/channels/getAllChannels'
import storage from './utils/storage'
import {  selectChannelState, setChannelState , selectSingleChannel } from './features/channel/channelSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  return (
    <>
       <div >
            <Home /> 
       </div>
    </>
  )
}

export default App
