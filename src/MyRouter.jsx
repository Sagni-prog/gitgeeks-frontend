import { useState, useEffect } from 'react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Layout/auth/Login';
import Register from './components/Layout/auth/Register';
import Signup from './components/Layout/auth/Signup';
import  GitHubCallback  from './api/auth/github/GitHubCallBack';
import LoginPage from '../.store/LoginpPage';
import Chat from './components/Layout/Chat';
import Channel from './components/Channel';
import Dm from './components/Dm';
import getAllChannels from './api/channels/getAllChannels'
import storage from './utils/storage'
import {  selectChannelState, setChannelState , selectSingleChannel } from './features/channel/channelSlice';
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import SkeletonLoader from './components/Elements/Loaders/SkeletonLoader';



const MyRouter = () => {

  const dispatch = useDispatch();
  const channelState = useSelector(selectChannelState);
  const singleChannel = useSelector((state) => selectSingleChannel(state,1))

  const getChannel = async() => {
    const id = storage.getUser().id;
    const response = await getAllChannels(id);
    if(response.status != 200){
      console.log("something went wrong");
    }
    dispatch(
      setChannelState({
        data: response.data.data,
        isLoaded: true
      }));
  }
 
  useEffect(() => {
    getChannel();

  },[]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: 'channels',
      element: <Channel />,
    },
    {
      path: 'load',
      element: <SkeletonLoader />,
    },
    {
      path: 'dm',
      element: <Dm />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/chat',
      element: <Chat />,
    },
    {
      path: '/auth/login',
      element: <Login />,
    },
    {
      path: '/auth/register',
      element: <Register />,
    },
    {
      path: '/auth/sign-up',
      element: <Signup />,
    },
    {
      path: '/auth/github/callback',
      element: <GitHubCallback />,
    },
  ]);

  return (
    <GoogleOAuthProvider clientId="6535988043-u61lvrqa021ufi01vq8lgo2d6pocuj21.apps.googleusercontent.com">
        <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
};

export default MyRouter