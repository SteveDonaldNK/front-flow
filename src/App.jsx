import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Post from './pages/Post/Post'
import Blog from './pages/Blog/Blog'
import Compose from './pages/Compose/Compose'
import Profile from './pages/Profile/Profile'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Careers from './pages/Careers/Careers'
import Terms from './pages/Terms/Terms'
import Newsletter from './pages/Newsletter/Newsletter'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/post",
    element: <Post />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/compose",
    element: <Compose />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/careers",
    element: <Careers />
  },
  {
    path: "/terms-of-service",
    element: <Terms />
  },
  {
    path: "/newsletter",
    element: <Newsletter />
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
