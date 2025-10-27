import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/about.jsx'
import Error from './components/error.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  } 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
