import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import ABOUT from './components/About/ABOUT';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>

  },
  {
    path:'/about',
    element:<ABOUT></ABOUT>
  },

   {
    path:'/contact',
    element:<Contact></Contact>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
