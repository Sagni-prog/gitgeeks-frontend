import React from 'react'
import Button from '../../Elements/Buttons/Button'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdDeviceHub } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



const Register = () => {

  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/auth/sign-up')
  }

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
                  height: "4.5rem",
                  fontSize: "1.6rem"
                }}
                title = "Sign up with GitHub" 
                icons = {<FaGithub className='ml-3 text-size-6' />}
           />
           <Button
                buttStyle = {{
                  width: "100%",
                  height: "4.5rem",
                  fontSize: "1.6rem"
                }}
                title = "Sign up with Google" 
                icons = {<FcGoogle className='ml-3 text-size-6' />}
           />
           <Button
                buttStyle = {{
                  width: "100%",
                  height: "4.5rem",
                  marginBottom: "2rem",
                  fontSize: "1.6rem"
                }}
                onClick = { navigateSignUp}
                title = "Sign up with Email" 
                icons = {<MdEmail className='ml-3 text-size-6' />}
           />
          <div className='line w-[100%]'></div>
          <div>
             <p className='color-primary font-medium text-size-3'>
              Already have an account ? 
              <a  href = '/auth/login' className='login text-cyan-400 text-size-4'>
                Log in
              </a>.
            </p>
          </div>
       </div>  
    </div>
  )
}

export default Register
