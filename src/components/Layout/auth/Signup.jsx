import React from 'react';
import Label from '../../Elements/Labels/Label';
import Input from '../../Elements/InputFields/Input';
import Button from '../../Elements/Buttons/Button';
const Signup = () => {
  return (
    <div className='flex justify-center items-center content-center h-screen'>
       <div className='w-[40%] h-[90%] flex flex-col justify-center content-center items-center gap-3 border-sm px-2 p-3 pt-0'>
       <div className='flex self-start color-primary'>
          <p className='text-xl mb-2'>Create Account</p>
        </div>
        <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "16px",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Full Name"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "40px",
                paddingLeft: "20px",
              }} 
          />
          <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "16px",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Email"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "40px",
                paddingLeft: "20px",
              }} 
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
          />

            <Button
              buttStyle = {{
                  width: "100%",
                  height: "55px",
                  color: "#fff"
              }}
              title = "Sign up" 
          />
        </div>
    </div>
  )
}

export default Signup
