import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import About from './components/about/About';
import ViewAbout from './components/admin/About/ViewAbout';
import Dashboard from './components/admin/Dashboard';
import Experiences from './components/admin/Experience/Experiences';
import Login from './components/admin/Login';
import PrivateRoute from './components/admin/PrivateRoute';
import ViewSkills from './components/admin/skills/ViewSkills';
import Types from './components/admin/types/Types';
import ViewWork from './components/admin/work/ViewWork';
import Contact from './components/contact/Contact';
import AdminLayout from './components/layouts/AdminLayout';
import Layout from './components/layouts/Layout';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import './index.css'
import CV from './components/cv/CV';
import ViewContact from './components/admin/contact/ViewContact';

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
                  element: <About />
               },
               {
                  path: "/skills",
                  element: <Skills />
               },
               {
                  path: "/works",
                  element: <Work />
               },
               {
                  path: "/contact",
                  element: <Contact />
               },
               {
                  path: "/cv",
                  element: <CV />
               }
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
