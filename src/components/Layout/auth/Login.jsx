import React from 'react'
import Button from '../../Elements/Buttons/Button'
import Input from '../../Elements/InputFields/Input';
import Label from '../../Elements/Labels/Label';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdDeviceHub } from "react-icons/md";

const Login = () => {
  return (
    <div className='flex justify-center items-center content-center h-screen'>
       <div className='w-[40%] h-[100%] flex flex-col justify-center content-center items-center gap-3'>
          <div className='flex flex-col justify-center items-center text-4xl color-primary mb-4'>
             <MdDeviceHub className='text-1xl color-primary mb-3' />
               <h3>Join the Nerd Community</h3>
          </div>
           <Button
                buttStyle = {{
                  width: "100%",
                  height: "45px"
                }}
                title = "Continue with GitHub" 
                icons = {<FaGithub size= '25px' className='ml-3' />}
           />
           <Button
                buttStyle = {{
                  width: "100%",
                  height: "45px",
                  marginBottom: "20px"
                }}
                title = "Continue with Google" 
                icons = {<FcGoogle size= '25px' className='ml-3' />}
           />

           <div className='orLabel color-primary'>
              OR
           </div>

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

          <div className='flex justify-between items-center content-center w-[100%]'> 
            <div className='flex justify-between items-center'>
             <label class="cyberpunk-checkbox-label">
                <input type="checkbox" class="cyberpunk-checkbox" />
                Remember me
              </label>
             </div>
             <a  href = '#' className='login text-cyan-400'>Forgot Password ?</a>
          </div>

          <Button
              buttStyle = {{
                  width: "100%",
                  height: "55px",
                  color: "#fff"
              }}
              title = "Log in" 
          />
          <div className='line w-[100%]'></div>
          <div>
             <p className='color-primary font-medium'>
                New to GeekHub Community ?
                <a  href = '/auth/register' className='login text-cyan-400'>
                  Create Account
                </a>.
              </p>
           </div>
       </div>  
    </div>
  )
}

export default Login
