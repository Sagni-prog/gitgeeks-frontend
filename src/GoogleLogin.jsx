import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';



const GoogleLogin = () => {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log("access token:",tokenResponse.access_token),
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
