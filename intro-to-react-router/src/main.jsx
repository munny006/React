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
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import First from './components/First/First';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Post from './components/Post/Post';
import PostDetail from './components/PostDetail/PostDetail';


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>

//   },
//   {
//     path:'/about',
//     element:<ABOUT></ABOUT>
//   },

//    {
//     path:'/contact',
//     element:<Contact></Contact>
//   },
// ])

const router = createBrowserRouter([
{
  path: '/',
  element:<Home></Home>,
  children:[
    {
      path:'/',
      element:<First></First>
    },
    {
      path:'friends',
      element:<Friends></Friends>,
      loader:() => fetch('https://jsonplaceholder.typicode.com/users')

      
   
    },
    {
      path:'friend/:friendId',
      element:<FriendDetail></FriendDetail>,
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
    },
    {
      path:'post',
      element:<Post></Post>,
      loader:() => fetch('https://jsonplaceholder.typicode.com/posts')
    },
    {
      path:'post/:postId',
      element:<PostDetail></PostDetail>
    },
    {
      path:'about',
      element:<ABOUT></ABOUT>
    },
    {
      path:'contact',
      element:<Contact></Contact>
    },
    {
        path: '*',
        element : <div>4444444</div>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header></Header> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
