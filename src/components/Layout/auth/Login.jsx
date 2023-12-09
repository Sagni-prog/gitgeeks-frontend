import { React, useState } from 'react'
import Button from '../../Elements/Buttons/Button'
import Input from '../../Elements/InputFields/Input';
import Label from '../../Elements/Labels/Label';
import { FaGithub, FaLeaf } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdDeviceHub } from "react-icons/md";
import storage from '../../../utils/storage';
import { useNavigate } from 'react-router-dom';
import { redirectToGithub } from '../../../api/auth/github/githubRedirect';
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../../../api/auth/google/googleLogin';
import Preloader from '../../Elements/Loaders/Preloader';



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

  const login = useGoogleLogin({
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
                  height: "45px"
                }}
                title = "Continue with GitHub" 
                icons = {<FaGithub size= '25px' className='ml-3' />}
                onClick = {redirectToGithub}
           />
           <Button
                buttStyle = {{
                  width: "100%",
                  height: "45px",
                  marginBottom: "20px"
                }}
                title = "Continue with Google" 
                icons = {<FcGoogle size= '25px' className='ml-3' />}
                onClick = {() => {
                  setIsLoading(true)
                  login()
                }}
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
              value={email} 
              setValue={setEmail}
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
              value = {password}
              setValue = {setPassword}
          />

          <div className='flex justify-between items-center content-center w-[100%]'> 
            <div className='flex justify-between items-center'>
             <label className="cyberpunk-checkbox-label">
                <input type="checkbox" className="cyberpunk-checkbox" />
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
              onClick = {handleLogin}
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
      ): (
      <Preloader />
      )
        }
      </>
  )
}

export default Login
