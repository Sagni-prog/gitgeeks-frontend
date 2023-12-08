// GitHubCallback.js
import React, { useEffect,useState } from 'react';
import { githubLogin } from './githubLogin';

const GitHubCallback = () => {

  const [photo, setPhoto] = useState("");

    const getAuth = async(code) => {

      console.log("before sending the code",code)

      const sentData = {"code": code}
      
        const data = await githubLogin(sentData);
        
        console.log("from backend", data);
        setPhoto(data.data. avatar_url)
    }

  useEffect(() => {
   
    const code = new URLSearchParams(window.location.search).get('code');

    if (code) {

        getAuth(code);
      
    }
  }, []);

  return (
    <div>
        {/* <img src= {photo} /> */}
    </div>
  );

};

export default GitHubCallback;
