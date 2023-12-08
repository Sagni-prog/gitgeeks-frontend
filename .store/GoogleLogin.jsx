import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';



const GoogleLogin = () => {

  const googleAuth = async(accessToken) => {

    console.log("google access token: ",accessToken)
    const sentData = {"accessToken": accessToken}
    const response = await axios.post('http://localhost:8000/api/auth/google',sentData,{
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
      }
   });
   console.log("form google auth: ",response)
  }

    const login = useGoogleLogin({
        onSuccess: tokenResponse => googleAuth(tokenResponse.access_token),
      });

  return (
    <div>
         <button onClick={() => login()}>
              Sign in with Google 🚀{' '}
        </button>;
    </div>
  )
}

export default GoogleLogin
