// GitHubCallback.js
import React, { useEffect } from 'react';
import { githubLogin } from './githubLogin';
import Preloader from '../../../components/Elements/Loaders/Preloader';
import { useNavigate } from 'react-router-dom';

const GitHubCallback = () => {
    const navigate = useNavigate();
    const getAuth = async(code) => {
      const sentData = {"code": code}  
      const response = await githubLogin(sentData);
      console.log("from backend", response);
      navigate('/');      
   }

  useEffect(() => {
   
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
        getAuth(code);
    }
  }, []);

  return (
    <>
       <Preloader />
    </>
  );

};

export default GitHubCallback;
