import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import getAllChannels from './api/channels/getAllChannels'
import storage from './utils/storage'
import {  selectChannelState, setChannelState , selectSingleChannel } from './features/channel/channelSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const channelState = useSelector(selectChannelState);
  const singleChannel = useSelector((state) => selectSingleChannel(state,1))

  const getChannel = async() => {
    const id = storage.getUser().id;
    const response = await getAllChannels(id);
    if(response.status != 200){
      console.log("something went wrong");
    }
    dispatch(
      setChannelState({
        data: response.data.data,
        isLoaded: true
      }));

    // console.log(response.data.data[0]);
  }
 
  useEffect(() => {
    getChannel();

  },[]);

  return (
    <>
       <div >
            <Home /> 
       </div>
    </>
  )
}

export default App
