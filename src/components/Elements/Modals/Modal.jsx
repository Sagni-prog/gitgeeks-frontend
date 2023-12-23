import React from 'react'
import Label from '../Labels/Label'
import Input from '../InputFields/Input'
import Button from '../Buttons/Button'
import TextArea from '../InputFields/TextArea'

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
           title = "Password"
       />

       <Input 
           inputStyle = {{
             width: "100%",
             height: "40px",
             paddingLeft: "20px",
           }} 
           // value = {password}
           // setValue = {setPassword}
       />
       <Label 
           labelStyle = {{
             color: "#adbac7",
             fontSize: "16px",
             fontWeight: "500",
             alignSelf: "flex-start",
           }}
           title = "Confirm Password"
       />

       <Input 
           inputStyle = {{
             width: "100%",
             height: "40px",
             paddingLeft: "20px",
             marginBottom: "20px"
           }} 
           // value = {confirmPassword}
           // setValue = {setConfirmPassword}
       />

         <Button
           buttStyle = {{
               width: "100%",
               height: "55px",
               color: "#fff"
           }}
           title = "Sign up" 
           // onClick = {handleSignup}
       />
       </div>
      </div>
 </div>

    // <div className= {`${show ? 'modal' : 'none'} `}>
    //   { children  }

    // </div>
  )
}

export default Modal
