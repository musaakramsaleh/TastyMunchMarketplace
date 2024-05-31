import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Components/Root/Root';
import Errorpage from '../Components/Errorelement/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import AllFood from '../Pages/AllFood/AllFood';
import Gallery from '../Pages/Gallery/Gallery';
import FoodDetails from '../Pages/AllFood/FoodDetails';
import Addfood from '../Components/Profile/Addfood';
import Myfood from '../Components/Profile/Myfood';
import Myorder from '../Components/Profile/Myorder';
import Buyfood from '../Components/buyfood/Buyfood';
import Update from '../Components/Update/Update';
import Privateroute from '../Components/Privateroute/Privateroute';



const router = createBrowserRouter([
    {
        element:<Root></Root>,
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch(`${import.meta.env.VITE_API_URL}/rankproduct`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allfood',
                element:<AllFood></AllFood>,
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>,
                loader:()=> fetch(`${import.meta.env.VITE_API_URL}/gallery`)
            },
            {
                path:'/addfood',
                element:<Privateroute><Addfood></Addfood></Privateroute>
            },
            {
                path:'/myfood',
                element:<Privateroute><Myfood></Myfood></Privateroute>
            },
            {
                path:'/myorder',
                element:<Privateroute><Myorder></Myorder></Privateroute>
            },
            {
                path:'/allfood/:id',
                element:<FoodDetails></FoodDetails>,
                loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)
            },
            {
                path:'/buyfood/:id',
                element:<Privateroute><Buyfood></Buyfood></Privateroute>,
                loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/foo/${params.id}`,{
                    credentials: 'include'})
            },
            {
                path:'/update/:id',
                element:<Privateroute><Update></Update></Privateroute>,
                loader:({params}) => fetch(`${import.meta.env.VITE_API_URL}/update/${params.id}`,{
                    credentials: 'include'})
            }
        ]
    }
])

export default router;