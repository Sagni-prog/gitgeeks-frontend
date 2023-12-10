import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import App from './App';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Login from './components/Layout/auth/Login';
// import Register from './components/Layout/auth/Register';
// import Signup from './components/Layout/auth/Signup';
// import  GitHubCallback  from './api/auth/github/GitHubCallBack';
// import LoginPage from '../.store/LoginpPage';
// import Chat from './components/Layout/Chat';
import { Provider } from 'react-redux';
import store from './app/store';
// import Channel from './components/Channel';
// import Workspace from './Worspace';
import MyRouter from './MyRouter';
import { createRoot } from 'react-dom/client';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "channels/:id",
//     element: <Channel />,
//   },
//   {
//     path: "workspaces/:id",
//     element: <Workspace />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/chat",
//     element: <Chat />,
//   },
//   {
//     path: "/auth/login",
//     element: <Login />,
//   },
//   {
//     path: "/auth/register",
//     element: <Register />,
//   },
//   {
//     path: "/auth/sign-up",
//     element: <Signup />,
//   },
//   {
//     path: "/auth/github/callback",
//     element: <GitHubCallback />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <GoogleOAuthProvider clientId="6535988043-u61lvrqa021ufi01vq8lgo2d6pocuj21.apps.googleusercontent.com">
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </GoogleOAuthProvider>
// )

// ReactDOM.render(<MyRouter />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store = {store}> 
       <MyRouter />
    </Provider>
);
