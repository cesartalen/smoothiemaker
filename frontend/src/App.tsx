import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { AppLayout } from './layouts/AppLayout'
import { HomePage } from './pages/HomePage'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
