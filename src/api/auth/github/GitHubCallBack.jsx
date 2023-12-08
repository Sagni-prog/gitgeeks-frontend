// GitHubCallback.js
import React, { useEffect,useState } from 'react';
import { githubLogin } from './githubLogin';
import Spinner from '../../../components/Elements/Loaders/Spinner';
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
    <div className='w-sceen h-screen flex justify-center items-center'>
        <Spinner />
    </div>
  );

};

export default GitHubCallback;
