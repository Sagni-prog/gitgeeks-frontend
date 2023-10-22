import {React, useState} from 'react';
import axios from 'axios';

const clientId = '6471a53e18f76b70e862';
const scope = 'user:email';



const GitHubLogin = () => {

  const [photo, setPhoto] = useState("");

  

  const handleLogin = () => {
    const redirectUri = encodeURIComponent('http://localhost:5173/github-callback');
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

  }

  return (
    <div>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

export default GitHubLogin;
