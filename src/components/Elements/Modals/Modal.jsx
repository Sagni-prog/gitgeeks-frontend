import React from 'react'
import Label from '../Labels/Label'
import Input from '../InputFields/Input'
import Button from '../Buttons/Button'
import TextArea from '../InputFields/TextArea'
import { IoIosLock } from "react-icons/io";


const Modal = ({handleClose, show, children }) => {


  return (

    <div
     className = {`${show ? 'modal' : 'none'} flex justify-center items-center content-center w-[100]`}
   >
     <div className='inside-modal w-[50%] h-[90%] flex flex-col justify-center content-center items-center gap-3  px-2 p-3 pt-0 bg-primary'>
     
     <div className='flex flex-col justify-center content-center items-center gap-3  px-2 p-3 pt-0 w-[90%]'>
     <div className='flex self-start color-primary'>
       <p className='text-xl mb-2'>Update Channel</p>
     </div>
     <Label 
           labelStyle = {{
             color: "#adbac7",
             fontSize: "16px",
             fontWeight: "500",
             alignSelf: "flex-start",
           }}
           title = "Channel Name"
       />

       <Input 
           inputStyle = {{
             width: "100%",
             height: "40px",
             paddingLeft: "20px",
           }} 
           // value = {name}
           // setValue = {setName}
       />
       <Label 
           labelStyle = {{
             color: "#adbac7",
             fontSize: "16px",
             fontWeight: "500",
             alignSelf: "flex-start",
           }}
           title = "Channel Description"
       />

       <TextArea 
           inputStyle = {{
             width: "100%",
             height: "100px",
             paddingLeft: "20px",
             resize: "none"

           }} 
           // value = {email}
           // setValue = {setEmail}
       />
     <Label 
           labelStyle = {{
             color: "#adbac7",
             fontSize: "16px",
             fontWeight: "500",
             alignSelf: "flex-start",
           }}
           title = "Channel Privacy"
       />

     <div
       style={{
        backgroundColor: "#373e47",
        height: "60px",
        width: '100%',
        borderRadius: "4px"
       }}
      className='flex items-center justify-between p-3'>
        <div className='flex flex-col justify-center gap-1 text-left'>
          <div className='flex items-center gap-1'>
            <p>Private Channel</p>
             <IoIosLock/>
          </div>
         <p className='text-xs'>By making a channel private. only invited member can view the channel</p>
        </div>

         <label className="cyberpunk-checkbox-label">
            <input type="checkbox" className="cyberpunk-checkbox" />
               
            </label>
     </div>
       
       <div className='flex justify-end gap-2 w-[100%]'>
         <Button
           buttStyle = {{
               width: "40%",
               height: "52px",
               color: "#fff"
           }}
           title = "Cancel" 
           onClick = {handleClose}
       />
         <Button
           buttStyle = {{
               width: "40%",
               height: "52px",
               color: "#fff",
               backgroundColor: "#22d3ee"
           }}
           title = "Update" 
          //  onClick = {handleClose}
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
