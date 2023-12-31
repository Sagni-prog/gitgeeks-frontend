import { useEffect, useState } from 'react'
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
import {  
  selectChannelState,
  setChannelState, 
  selectSingleChannel,
  selectAllChannels,
  setSelectedChannel,
} from './features/channel/channelSlice';
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import SkeletonLoader from './components/Elements/Loaders/SkeletonLoader';
import { getChannelMessages } from './api/messages/getMessages';
import { 
  setMessages, 
  selectMessages, 
  selectNextLink, 
  addNewMessages  
} from './features/message/messageSlice';
import ChannelMessage from './components/ChannelMessage';
import Pusher from 'pusher-js';
import { useReducer } from 'react';
import toggleContext from './contexts/toggleContext';
import toggleReducer from './reducers/toggleReducer';

import modalContext from './contexts/modalContext';
import modalReducer from './reducers/modalReducer';


const MyRouter = () => {
  
  const [toggle, setToggle] = useState(storage.getToggle())
  const [toggleState, dispatchToggle] = useReducer(toggleReducer, {
     isOpen: toggle,
     component: ""
    });
 
  const [modalState, dispatchModal] = useReducer(modalReducer,{isOpen: false});
  const [newIncoming, setNewIncoming] = useState([])

  const dispatch = useDispatch();
  const channelState = useSelector(selectChannelState);
  const messages = useSelector(selectMessages);
  const channelId = useSelector(selectSingleChannel);
  const channels = useSelector(selectAllChannels);

  const getChannel = async() => {
    const id = storage.getUser().id;
    const response = await getAllChannels(id);
    if(response.status != 200){
  
    }

    dispatch(
      setChannelState({
        data: response.data.data,
        isLoaded: true
      }));
  }

  const getMessage = async(id) => {
     const response = await getChannelMessages(id);
     dispatch(
      setMessages({
        messages: response.data.data.reverse(),
        nexLink: response.data.next_page_url,
        isLoaded: true,
        initialLoad: true
      }))
  }

  const inboundMessage = () => {
    if(newIncoming[0]?.receiverable_id == channelId){
      if(!messages.messages.includes(newIncoming[0].id)){
        dispatch(
          addNewMessages({
            messages: newIncoming
          })) 
       }
       return 0;
    }  
    return 0;
  }
 
  useEffect(() => {
    getChannel();
  },[]);

  useEffect(() => {
    inboundMessage();  
 },[newIncoming])

    // channel subscription
    const subscribeToChannel = (id) => {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = localStorage.getItem('token');
      var pusher = new Pusher('9abe623e2b4f6c0136c4', {
        authEndpoint: 'http://127.0.0.1:8000/broadcasting/auth',
        cluster: 'us2',
        encrypted: true,
        auth: {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
           
          }
        }
      });
  
      var channel = pusher.subscribe(`private-channel.${id}`);
  
      channel.bind('channel.message', function (data) {
  
        const newMessages = [data.message];
          setNewIncoming(newMessages)
      });
    }

  useEffect(() => {
    channels.map((data) => {
      subscribeToChannel(data.id)
    })  
  },[channelState]);

  useEffect(() => {
    getMessage(channelId);
    dispatch(
      setSelectedChannel({
        channelId: channelId
      })
    )
  },[channelId]);


  const router = createBrowserRouter([
    {
      path: '/@me',
      element: <App />,
    },
    {
      path: 'channels',
      element: <Channel />,
    },
    {
      path: 'channels/:id',
      element: <ChannelMessage />,
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
        <toggleContext.Provider 
           value={
                    {
                      toggleState, dispatchToggle
                    }
                  }
        >
          <modalContext.Provider
             value={
              {
                modalState, dispatchModal
              }
             }
          >
              <RouterProvider router={router} /> 
          </modalContext.Provider>
        </toggleContext.Provider>
    </GoogleOAuthProvider>
  );
};

export default MyRouter
