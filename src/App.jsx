import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import getAllChannels from './api/channels/getAllChannels'
import storage from './utils/storage'

function App() {

  const getChannel = async() => {
    const id = storage.getUser().id;
    const response = await getAllChannels(id);
    if(response.status != 200){
      console.log("something went wrong");
    }


    console.log(response.data.data[0]);
  }
 
  useEffect(() => {
    getChannel();
  },[])

  return (
    <>
       <div >
            <Home /> 
       </div>
    </>
  )
}

export default App
