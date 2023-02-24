import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
