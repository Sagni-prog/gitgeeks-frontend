// GitHubCallback.js
import React, { useEffect,useState } from 'react';
import axios from 'axios';

const GitHubCallback = () => {

  const [photo, setPhoto] = useState("");

    const getAuth = async(code) => {

      console.log("before sending the code",code)

      const sentData = {"code": code}
      
        const data = await axios.post('http://127.0.0.1:8000/api/login/github',sentData,{
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json',
            }
         });
        
        console.log("from backend", data);
        // setPhoto(data.data. avatar_url)
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
