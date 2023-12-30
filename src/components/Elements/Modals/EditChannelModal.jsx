import React from 'react'
import Label from '../Labels/Label';
import Input from '../InputFields/Input';
import Button from '../Buttons/Button';

const EditChannelModal = () => {
  return (
    <div
       style={{
        backgroundColor: "yellow"
       }}
    className='flex justify-center items-center content-center w-[100]'>
        <div 
          style={{

            backgroundColor: "red"
          }}
        className='w-[100%] h-[90%] flex flex-col justify-center content-center items-center gap-3  px-2 p-3 pt-0'>
       <div className='flex self-start color-primary'>
          <p className='text-size-4 mb-2'>Create Account</p>
        </div>
        <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "1.8rem",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Full Name"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "4rem",
                paddingLeft: "2rem",
                fontSize: "1.6rem"
              }} 
              // value = {name}
              // setValue = {setName}
          />
          <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "1.8rem",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Email"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "4rem",
                paddingLeft: "2rem",
                fontSize: "1.6rem"
              }} 
              // value = {email}
              // setValue = {setEmail}
          />
        <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "1.8rem",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Password"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "4rem",
                paddingLeft: "2rem",
                fontSize: "1.6rem"
              }} 
              // value = {password}
              // setValue = {setPassword}
          />
          <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "1.8rem",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Confirm Password"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "4rem",
                paddingLeft: "2rem",
                marginBottom: "2rem",
                fontSize: "1.6rem"
              }} 
              // value = {confirmPassword}
              // setValue = {setConfirmPassword}
          />

            <Button
              buttStyle = {{
                  width: "100%",
                  height: "5.5rem",
                  color: "#fff",
                  fontSize: "1.8rem"
              }}
              title = "Sign up" 
              // onClick = {handleSignup}
          />
          </div>
    </div>
  )
}

export default EditChannelModal
