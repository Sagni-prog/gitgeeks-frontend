import React from 'react'
import Button from '../../Elements/Buttons/Button'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdDeviceHub } from "react-icons/md";
import { MdEmail } from "react-icons/md";



const Register = () => {
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
                title = "Sign up with GitHub" 
                icons = {<FaGithub size= '25px' className='ml-3' />}
           />
           <Button
                buttStyle = {{
                  width: "100%",
                  height: "45px",
                }}
                title = "Sign up with Google" 
                icons = {<FcGoogle size= '25px' className='ml-3' />}
           />
           <Button
                buttStyle = {{
                  width: "100%",
                  height: "45px",
                  marginBottom: "20px"
                }}
                title = "Sign up with Email" 
                icons = {<MdEmail size= '25px' className='ml-3' />}
           />
          <div className='line w-[100%]'></div>
          <div>
             <p className='color-primary font-medium'>
              Already have an account ? 
              <a  href = '/auth/login' className='login text-cyan-400'>
                Log in
              </a>.
            </p>
          </div>
       </div>  
    </div>
  )
}

export default Register
