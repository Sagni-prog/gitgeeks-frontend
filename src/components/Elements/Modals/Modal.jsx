import React, { useEffect, useState} from 'react'
import Label from '../Labels/Label'
import Input from '../InputFields/Input'
import Button from '../Buttons/Button'
import TextArea from '../InputFields/TextArea'
import { IoIosLock } from "react-icons/io";
import { selectChannel, selectSingleChannel, updateChannel } from '../../../features/channel/channelSlice';
import { useSelector, useDispatch } from 'react-redux'
import channelUpdate from '../../../api/channels/upDateChannel'



const Modal = ({handleClose, show, id }) => {

  const dispatch = useDispatch();
  const channelId = useSelector(selectSingleChannel);
  const channel = useSelector((state) => selectChannel(state, id));
  const [channelName, setChannelName] = useState("")
  const [channelDescription, setChannelDescription] = useState("")
  const [isChecked, setIsChecked] =useState(false)

 useEffect(() => {
    setChannelName(channel?.channel_name);
    setChannelDescription(channel?.description)
    if(channel?.is_private){
      setIsChecked(true);
    }else{
      setIsChecked(false)
    }
 },[channel])


 const handleUpdate = async() => {
  const sentData =  {
        channel_name: channelName,
        description: channelDescription,
        is_private: isChecked
  }
  const response = await channelUpdate(id, sentData);
  console.log("update response :",response);
  if(response.status === 201){
    if(response.data.status === "success"){
       dispatch(updateChannel({
          id: id,
          newChannel: response.data.data
       }))
       handleClose()
    }
  }
 }
 

  return (

    <div
     className = {`${show ? 'modal' : 'none'} flex justify-center items-center content-center w-[100]`}
   >
     <div className='inside-modal w-[50%] h-[90%] flex flex-col justify-center content-center items-center gap-3  px-2 p-3 pt-0 bg-primary'>
     
     <div className='flex flex-col justify-center content-center items-center gap-3  px-2 p-3 pt-0 w-[90%]'>
     <div className='flex self-start color-primary'>
       <p className='text-size-4 mb-2'>Update Channel</p>
     </div>
     <Label 
           labelStyle = {{
             color: "#adbac7",
             fontSize: "1.8rem",
             fontWeight: "500",
             alignSelf: "flex-start",
           }}
           title = "Channel Name"
       />

       <Input 
           inputStyle = {{
             width: "100%",
             height: "4rem",
             paddingLeft: "2rem",
             fontSize: "1.6rem"
           }} 
           value = {channelName}
           setValue = {setChannelName}
       />
       <Label 
           labelStyle = {{
             color: "#adbac7",
             fontSize: "1.8rem",
             fontWeight: "500",
             alignSelf: "flex-start",
           }}
           title = "Channel Description"
       />

       <TextArea 
           inputStyle = {{
             width: "100%",
             height: "10rem",
             paddingLeft: "2rem",
             resize: "none",
             fontSize: "1.6rem"
           }} 
           value = {channelDescription}
           setValue = {setChannelDescription}
       />
     <Label 
           labelStyle = {{
             color: "#adbac7",
             fontSize: "1.8rem",
             fontWeight: "500",
             alignSelf: "flex-start",
           }}
           title = "Channel Privacy"
       />

     <div
       style={{
        backgroundColor: "#373e47",
        height: "6rem",
        width: '100%',
        borderRadius: "4px"
       }}
      className='flex items-center justify-between p-3'>
        <div className='flex flex-col justify-center gap-1 text-left'>
          <div className='flex items-center gap-1'>
            <p className='text-size-3'>Private Channel</p>
             <IoIosLock/>
          </div>
         <p className='text-size-2'>By making a channel private. only invited member can view the channel</p>
        </div>

         <label className="cyberpunk-checkbox-label">
            <input 
                type="checkbox" 
                className="cyberpunk-checkbox text-size-3"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                 />
        </label>
     </div>
       
       <div className='flex justify-end gap-2 w-[100%]'>
         <Button
           buttStyle = {{
               width: "40%",
               height: "52px",
               color: "#fff",
               fontSize: "1.8rem"
           }}
           title = "Cancel" 
           onClick = {handleClose}
       />
         <Button
           buttStyle = {{
               width: "40%",
               height: "52px",
               color: "#22d3ee",
              //  backgroundColor: "#22d3ee",
               fontSize: "1.8rem"
           }}
           title = "Update" 
           onClick = {handleUpdate}
       />
       </div>
         
       </div>
      </div>
 </div>

    // <div className= {`${show ? 'modal' : 'none'} `}>
    //   { children  }

    // </div>
  )
}

export default Modal
