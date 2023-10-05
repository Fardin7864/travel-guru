import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRout from './routes/MainRout.jsx'
import Authantication from './providers/Authantication'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authantication>
    <RouterProvider router={MainRout}></RouterProvider>
    </Authantication>
  </React.StrictMode>,
)
