import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GitHubLogin from '../.store/GitHubLogin';
import GitHubCallback from '../.store/GitHubCallback';
import GoogleLogin from '../.store/GoogleLogin';
import Chat from '../.store/Chat';
import LoginPage from '../.store/LoginpPage';
import OpenChat from '../.store/OpenChat';
// import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="6535988043-u61lvrqa021ufi01vq8lgo2d6pocuj21.apps.googleusercontent.com">
     <RouterProvider router={router} />
  </GoogleOAuthProvider>
)
