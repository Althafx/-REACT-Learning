import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './components/about.jsx'
import Error from './components/error.jsx'
import Body from './components/body.jsx'
import Details from './components/details.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",          // default home route
        element: <Body />,
      },
      {
        path: "about",      // child route
        element: <About />,
      },
      {
        path:"details/:id",    // child route
        element: <Details />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
