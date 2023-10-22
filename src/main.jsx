import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from './LoginpPage';
import Chat from './Chat';
import GitHubLogin from './githubLogin';
import GitHubCallback from './GitHubCallback';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLogin from './GoogleLogin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/github_login",
    element: <GitHubLogin />,
  },
  {
    path: "github-callback",
    element: <GitHubCallback />,
  },
  {
    path: "google-login",
    element: <GoogleLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="6535988043-u61lvrqa021ufi01vq8lgo2d6pocuj21.apps.googleusercontent.com">
     <RouterProvider router={router} />
  </GoogleOAuthProvider>
)
