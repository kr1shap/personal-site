import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Abt from "./pages/Abt";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import NotFound from './pages/NotFound.jsx';
import MobileUnsup from './pages/MobileUnsup.jsx';


const mobileRouter = createBrowserRouter([
  { path: '/', element: <MobileUnsup />, errorElement: <NotFound back={false} /> },
  ]);

const router = createBrowserRouter([
  {path:'/', 
  element: <Abt/>,
  errorElement: <NotFound back={true}/>},
  {path:'/projects', 
  element: <Experience isExp={false} />},
  {path:'/experience', 
  element: <Experience isExp={true} />},
  {path:'/contact', 
  element: <Contact/>}
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
    {/* {window.innerWidth > 768 ? <RouterProvider router={router}/> : <RouterProvider router={mobileRouter}/> } */}
  </StrictMode>,
)
