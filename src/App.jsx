import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "/components/About.jsx"
import Pricing from "/components/Pricing.jsx"
import Service from "/components/Service.jsx"
import AppLayout from "/components/AppLayout.jsx"
import Main from "/components/Main.jsx"

const App=()=>{
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children:[
        {
          path:"/",
          element:<Main />
        },
        {
          path:"/about",
          element:<About />
        },{
          path:"/pricing",
          element:<Pricing />
        }
        ,{
          path:"/service",
          element:<Service />
        }
      ]
    }
  ])

  return(
  <RouterProvider router={router} />
)
}

export default App

