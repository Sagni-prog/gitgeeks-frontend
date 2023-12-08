import React from 'react'
import Button from '../../Elements/Buttons/Button'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



const Login = () => {
  return (
    <div className='flex justify-center items-center content-center h-screen'>
       <div className='w-[40%] h-[100%] flex flex-col justify-center content-center items-center gap-3'>
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
                  height: "45px"
                }}
                title = "Sign up with Google" 
                icons = {<FaGoogle size= '25px' className='ml-3' />}
           />
       </div>  
    </div>
  )
}

export default Login
