

import { RouterProvider } from 'react-router'
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './components/Home/homePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {path: "/",
        element: <Homepage/>}
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
