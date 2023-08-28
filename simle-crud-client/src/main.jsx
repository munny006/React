import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/users';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path:"/users",
    element:<Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
