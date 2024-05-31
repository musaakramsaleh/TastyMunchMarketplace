import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import Firebase_Provider from './Components/Firebase_Provider/Firebase_Provider.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Firebase_Provider>
    <React.StrictMode>
   <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
  </React.StrictMode>
  </Firebase_Provider>
)
