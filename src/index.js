import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import ViewAbout from './components/admin/About/ViewAbout';
import Dashboard from './components/admin/Dashboard';
import Experiences from './components/admin/Experience/Experiences';
import Login from './components/admin/Login';
import PrivateRoute from './components/admin/PrivateRoute';
import ViewSkills from './components/admin/skills/ViewSkills';
import Types from './components/admin/types/Types';
import ViewWork from './components/admin/work/ViewWork';
import AdminLayout from './components/layouts/AdminLayout';
import Layout from './components/layouts/Layout';
import './index.css'
import ViewContact from './components/admin/contact/ViewContact';
import Education from './components/admin/education/Education';
import ATSCV from './components/admin/cv/ATSCV';
import Home from './pages/Home';

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "admin",
            element: <PrivateRoute component={AdminLayout} />,
            children: [
               {
                  path: "",
                  element: <Dashboard />
               },
               {
                  path: "education",
                  element: <Education />
               },
               {
                  path: "experiences",
                  element: <Experiences />
               },
               {
                  path: "skills",
                  element: <ViewSkills />
               },
               {
                  path: "types",
                  element: <Types />
               },
               {
                  path: "work",
                  element: <ViewWork />
               },
               {
                  path: "about",
                  element: <ViewAbout />
               },
               {
                  path: "contact",
                  element: <ViewContact />
               },
               {
                  path: "cv",
                  element: <ATSCV />
               },
            ]
         },
         {
            path: "",
            element: <Layout />,
            children: [
               {
                  path: "login",
                  element: <Login />,
               },
               {
                  path: "",
                  element: <Home />
               },
            ]
         }
      ]
   }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)
