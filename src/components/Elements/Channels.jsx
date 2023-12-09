import {React, useState, useEffect} from 'react'
import { FaAngleDown } from "react-icons/fa6";
import storage from '../../utils/storage';
import getAllChannels from '../../api/channels/getAllChannels';
import { FaHashtag } from "react-icons/fa6";



const Channels = () => {

  const [channels, setChannels] = useState([]);

  const getChannel = async() => {
    const id = storage.getUser().id;
    const response = await getAllChannels(id);
    if(response.status != 200){
      console.log("something went wrong");
    }


   
    setChannels(response.data.data)
  }
 
  useEffect(() => {
    getChannel();
    console.log(channels);
  },[])
  return (
    <div className='flex flex-col justify-start items-start content-center w-[100%] mt-6 '>
      <div className='flex items-center gap-1 content-center px-[6%]'>
        <FaAngleDown className='text-sm' />
        <h1 className=''>CHANNELS</h1>
      </div>
      <div className='flex flex-col mt-1 w-[100%] h-[100%] color-secondary'>
         {
           channels.map((data, index) => (
            <div className='cursor-pointer channel'>
            <div className='ml-2 flex items-center gap-2 pl-[8%] py-2'>
             
                {
                  data.photo !== null ?  (
                    <div className='profile cursor-pointer'>  
                     <img src = "https://avatars.githubusercontent.com/u/98890510?s=400&u=5bb16356e20b68aea2928951d56cda9347d5c77c&v=4" className='rounded-full border' />
                     </div>
                  ): (
                 <div className='flex justify-center items-center content-center'>   
                   <FaHashtag  />
                   </div>
                  )
                }
               
              <div>
                <p>{data.channel_name.substr(0, 19)}</p>
              </div> 
            </div>  
          </div>
           ))
         }
        </div>
    </div>
  )
}

export default Channels
