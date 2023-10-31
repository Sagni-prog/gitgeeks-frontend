import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GitHubCallback from './GitHubCallback';
import GitHubLogin from './GitHubLogin';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/auth/github',
    element: <GitHubLogin />
  },
  {
    path: '/github-callback',
    element: <GitHubCallback />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="6535988043-u61lvrqa021ufi01vq8lgo2d6pocuj21.apps.googleusercontent.com">
     <RouterProvider router={router} />
  </GoogleOAuthProvider>
)
