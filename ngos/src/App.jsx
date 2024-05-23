

import { RouterProvider } from 'react-router'
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Home/homepage';
import { Contact } from './components/Contact/Cmain';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {path: "/",
        element: <Homepage/> },
        {path: "/contact",
        element: <Contact/> }

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
