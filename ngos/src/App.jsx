

import { RouterProvider } from 'react-router'
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Home/homepage';
import { Contact } from './components/Contact/Cmain';
import { About } from './components/About/Abmain';
import { WorkMain } from './components/Work/workMain';
import OurTeam from './components/About/ourt';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {path: "/",
        element: <Homepage/> },
        {path: "/contact",
        element: <Contact/> },
        {path: "/about",
        element: <About/> },
        {path: "/our Work",
        element: <WorkMain /> },
        {path: "/our team",
        element: <OurTeam/> }

      ]
    },
  ]);

  return (

    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
