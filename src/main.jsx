import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Blog from './components/Blog/Blog'
import JobDetails from './components/JobDetails/JobDetails'
import { jobsAndCartLoader } from './loader/applieJobsLoader'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: jobsAndCartLoader 
      },
      {
        path:"/jobDetails/:id",
        element: <JobDetails></JobDetails>,
       
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs></AppliedJobs>,
        loader: jobsAndCartLoader
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
