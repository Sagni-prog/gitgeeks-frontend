import { React, useState } from 'react'
import Button from '../../Elements/Buttons/Button'
import Input from '../../Elements/InputFields/Input';
import Label from '../../Elements/Labels/Label';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdDeviceHub } from "react-icons/md";
import storage from '../../../utils/storage';
import { useNavigate } from 'react-router-dom';
import { redirectToGithub } from '../../../api/auth/github/githubRedirect';
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../../../api/auth/google/googleLogin';
import Preloader from '../../Elements/Loaders/Preloader';
import { login } from '../../../api/auth/login';


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = () => {
    try {
      const loginData = {"email": email, "password": password}
      sendLogin(loginData)
    } catch (error) {
      
    }
  }

  const sendLogin = async(loginData) => {
    const response = await login(loginData);
    console.log("api data:", response)
    if(response.data.statusCode == 200){
      storage.setUser(response.data.user);
      storage.setToken(response.data.token);
      navigate('/');  
    }
  }

  const googleAuth = async(accessToken) => {
   
    console.log("google access token: ",accessToken)
    const sentData = {"accessToken": accessToken}
    const response = await googleLogin(sentData);
    if(response.data.status === "success"){
      console.log("loggedin with google:",response)
      storage.setUser(response.data.data);
      storage.setToken(response.data.token);
      navigate('/');
      setIsLoading(false)  
    }
  } 

  const processGoogleLogin = useGoogleLogin({
    onSuccess: tokenResponse => googleAuth(tokenResponse.access_token),
  });

  return (
    <>
    {
      !isLoading ? (
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
                title = "Continue with GitHub" 
                icons = {<FaGithub className='ml-3 text-size-6' />}
                onClick = {redirectToGithub}
           />
           <Button
                buttStyle = {{
                  width: "100%",
                  height: "4.5rem",
                  marginBottom: "2rem",
                  fontSize: "1.6rem"
                }}
                title = "Continue with Google" 
                icons = {<FcGoogle className='ml-3 text-size-6' />}
                onClick = {() => {
                  setIsLoading(true)
                  processGoogleLogin()
                }}
           />

           <div className='orLabel color-primary text-size-3'>
              OR
           </div>

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
                fontSize: "1.6rem",
              }} 
              value={email} 
              setValue={setEmail}
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
              }} 
              value = {password}
              setValue = {setPassword}
          />

          <div className='flex justify-between items-center content-center w-[100%]'> 
            <div className='flex justify-between items-center'>
             <label className="cyberpunk-checkbox-label">
                <input type="checkbox" className="cyberpunk-checkbox text-size-3" />
                Remember me
              </label>
             </div>
             <a  href = '#' className='login text-cyan-400 text-size-3'>Forgot Password ?</a>
          </div>

          <Button
              buttStyle = {{
                  width: "100%",
                  height: "5.5rem",
                  color: "#fff",
                  fontSize: "1.8rem"
              }}
              title = "Log in" 
              onClick = {handleLogin}
          />
          <div className='line w-[100%]'></div>
          <div>
             <p className='color-primary font-medium text-size-3'>
                New to GeekHub Community ?
                <a  href = '/auth/register' className='login text-cyan-400 text-size-3'>
                  Create Account
                </a>.
              </p>
           </div>
       </div>  
    </div>
      ): (
      <Preloader />
      )
        }
      </>
  )
}

export default Login
