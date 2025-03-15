

import Login from"../pages/login";
import Home from "../pages/home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import About from "../pages/about";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
        ]
    },

    {
        path:'/login',
        element:<Login/>
    },
   

])



export default router;