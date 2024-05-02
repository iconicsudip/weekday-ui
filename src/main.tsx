import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import MainLayout from './layouts/MainLayout'
import Jobs from './pages/Jobs/Jobs.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Jobs /> },
      { path: '*', element: <Jobs /> },
    ]
  },
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router}/>
    </App>
  </React.StrictMode>,
)
